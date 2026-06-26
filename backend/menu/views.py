from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Category, Product, Size, Crust, Order
from .serializers import CategorySerializer, ProductSerializer, SizeSerializer, CrustSerializer, OrderSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class SizeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class CrustViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Crust.objects.all()
    serializer_class = CrustSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-created_at')
    serializer_class = OrderSerializer
    
    @action(detail=False, methods=['post'])
    def checkout(self, request):
        # Aqui ficará a lógica simulada do Stripe e cálculo de distância
        # Para simular, apenas criamos o pedido e devolvemos sucesso.
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            return Response({
                "status": "success", 
                "message": "Pagamento Simulado Aprovado", 
                "order_id": order.id
            }, status=201)
        return Response(serializer.errors, status=400)
