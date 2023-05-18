from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import generics,viewsets
from mall.serializers import CategorySerializer,GoodsDetailNameSerializer,SizeSerializer,ColorSerializer,GoodsDetailSerializer,InventorySerializer,GoodsSerializer
from mall.models import Category,Goods,GoodsDetail,GoodsDetailName,Size,Color,Inventory
# Create your views here.
class CategoryView(generics.CreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class GoodsView(generics.ListCreateAPIView):
    queryset = Goods.objects.all()
    serializer_class = GoodsSerializer

class GoodsDetailNameView(generics.CreateAPIView):
    serializer_class = GoodsDetailNameSerializer
    queryset = GoodsDetailName.objects.all()

class GoodsDetailView(generics.ListCreateAPIView):
    serializer_class = GoodsDetailSerializer
    queryset = GoodsDetail.objects.all()

class SizeView(generics.ListCreateAPIView):
    serializer_class = SizeSerializer
    queryset = Size.objects.all()

class ColorView(generics.ListCreateAPIView):
    serializer_class = ColorSerializer
    queryset = Color.objects.all()

class InventoryView(generics.ListCreateAPIView):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()

class totalView(viewsets.ModelViewSet):
    queryset = Goods.objects.all()
    serializer_class = GoodsSerializer

class DetailView(viewsets.ModelViewSet):
    serializer_class = GoodsDetailSerializer
    queryset = GoodsDetail.objects.all()

@csrf_exempt
def goods_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = GoodsDetail.objects.get(pk=pk)
    except GoodsDetail.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = GoodsDetailSerializer(snippet)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = GoodsDetailSerializer(snippet, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        snippet.delete()
        return HttpResponse(status=204)