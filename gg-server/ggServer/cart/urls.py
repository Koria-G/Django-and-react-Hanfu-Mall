from django.urls import path,include
from cart import views
from .views import CartView,ShoppingView,ShopView,cartAllView
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'cartAll',views.cartAllView)

urlpatterns = [
    path('cart/', CartView.as_view()),
    path('shop/', ShoppingView.as_view()),
    path('shopList/', ShopView.as_view()),
    path('',include(router.urls))
]