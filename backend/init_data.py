import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'donnapizza_api.settings')
django.setup()

from menu.models import Category, Product, Size, Crust  # noqa: E402

def run():
    print("Criando categorias...")
    cat_pizza, _ = Category.objects.get_or_create(name="Pizzas")
    cat_calzone, _ = Category.objects.get_or_create(name="Calzones")
    cat_bebida, _ = Category.objects.get_or_create(name="Bebidas")

    print("Criando tamanhos...")
    Size.objects.get_or_create(name="Pequena", price_modifier=-10.00)
    Size.objects.get_or_create(name="Média", price_modifier=0.00)
    Size.objects.get_or_create(name="Grande", price_modifier=15.00)

    print("Criando bordas...")
    Crust.objects.get_or_create(name="Tradicional", price_modifier=0.00)
    Crust.objects.get_or_create(name="Recheada com Catupiry", price_modifier=8.00)
    Crust.objects.get_or_create(name="Recheada com Cheddar", price_modifier=8.00)

    print("Criando produtos...")
    Product.objects.get_or_create(
        name="Margherita Premium",
        category=cat_pizza,
        description="Molho de tomate fresco, mussarela de búfala, manjericão e azeite trufado.",
        base_price=55.00,
        image="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400"
    )
    Product.objects.get_or_create(
        name="Pepperoni Supreme",
        category=cat_pizza,
        description="Mussarela, pepperoni duplo, cebola roxa e um toque de parmesão.",
        base_price=62.00,
        image="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400"
    )

    print("Banco de dados populado com sucesso!")

if __name__ == "__main__":
    run()
