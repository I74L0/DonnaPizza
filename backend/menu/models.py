from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True, help_text="URL da imagem (ex: Unsplash)")
    base_price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Preço base (Média/Único)")
    
    def __str__(self):
        return self.name

class Size(models.Model):
    name = models.CharField(max_length=50) # P, M, G
    price_modifier = models.DecimalField(max_digits=10, decimal_places=2, default=0, help_text="Valor adicionado ou subtraído do preço base")
    
    def __str__(self):
        return f"{self.name} (+R$ {self.price_modifier})"

class Crust(models.Model):
    name = models.CharField(max_length=100) # Tradicional, Catupiry, Cheddar
    price_modifier = models.DecimalField(max_digits=10, decimal_places=2, default=0, help_text="Valor adicional pela borda")
    
    def __str__(self):
        return f"{self.name} (+R$ {self.price_modifier})"

class Order(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pendente'),
        ('PAID', 'Pago'),
        ('PREPARING', 'Preparando'),
        ('OUT_FOR_DELIVERY', 'Saiu para Entrega'),
        ('DELIVERED', 'Entregue'),
    ]
    
    customer_name = models.CharField(max_length=200, blank=True)
    customer_address = models.TextField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    delivery_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Pedido #{self.id} - {self.status}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    size = models.ForeignKey(Size, on_delete=models.SET_NULL, null=True, blank=True)
    crust = models.ForeignKey(Crust, on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Preço unitário pago no momento")
    
    def __str__(self):
        return f"{self.quantity}x {self.product.name}"
