
from django.urls import path,include
from mall import views
from .views import GoodsView,SizeView,ColorView,InventoryView,GoodsDetailView
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'to', InventoryView)
# router.register(r'pic', DetailView)
urlpatterns = [
    path('mall/', GoodsView.as_view()),
    path('mallT/', InventoryView.as_view()),
    path('mallC/',GoodsDetailView.as_view()),
    # path('mallC/<int:pk>/', views.goods_detail)
    path('size/',SizeView.as_view())

]
