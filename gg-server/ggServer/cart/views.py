from django.shortcuts import render
from rest_framework import generics,viewsets
from cart.serializers import CartSerializer,ShoppingSerializer,ShopSerializer
from cart.models import CartItem,ShoppingCart

# Create your views here.
class CartView(generics.ListCreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartSerializer

class ShoppingView(generics.ListCreateAPIView):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingSerializer

class ShopView(generics.ListAPIView):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShopSerializer

class cartAllView(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingSerializer