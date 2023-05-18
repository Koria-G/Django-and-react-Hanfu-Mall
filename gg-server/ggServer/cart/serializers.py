from rest_framework import serializers
from cart.models import CartItem,ShoppingCart
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model=CartItem
        fields="__all__"

class ShoppingSerializer(serializers.ModelSerializer):
    class Meta:
        model=ShoppingCart
        fields="__all__"
        
class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model=ShoppingCart
        fields="__all__"
        depth=2
        