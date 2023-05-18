from rest_framework import serializers
from mall.models import Category,Goods,GoodsDetail,GoodsDetailName,Size,Color,Inventory

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields="__all__"

class GoodsDetailSerializer(serializers.ModelSerializer):
    gdname=serializers.SlugRelatedField(slug_field='gdname', queryset=GoodsDetailName.objects.all())
    goods=serializers.SlugRelatedField(slug_field='id', queryset=Goods.objects.all())

    class Meta:
        model=GoodsDetail
        fields="__all__"
        # depth=2

class GoodsDetailNameSerializer(serializers.ModelSerializer):
    detail_name=GoodsDetailSerializer(many=True)
    class Meta:
        model=GoodsDetailName
        fields=["id","gdname","detail_name"]
        # depth=2

class InventorySerializer(serializers.ModelSerializer):
    # color=serializers.SlugRelatedField(slug_field='id', queryset=Color.objects.all())
    # goods=serializers.SlugRelatedField(slug_field='id', queryset=Goods.objects.all())
    # size=serializers.SlugRelatedField(slug_field='id', queryset=Size.objects.all())

    class Meta:
        model=Inventory
        fields="__all__"
        depth=2

class GoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Goods
        fields=["id","gname","gdesc","oldprice","price","category","img"]

class SizeSerializer(serializers.ModelSerializer):
    goods_size=InventorySerializer(many=True)
    class Meta:
        model=Size
        fields=["id","sname","goods_size"]

class ColorSerializer(serializers.ModelSerializer):
    goods_color=InventorySerializer(many=True)
    class Meta:
        model=Color
        fields=["id","colorname","colorurl","goods_color"]

