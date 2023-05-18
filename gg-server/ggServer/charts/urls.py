from django.urls import path,include
from .views import cart_chart,goods_charts,user_chart,comm_chart

urlpatterns = [
    path('cart/',cart_chart),
    path('user1/',goods_charts),
    path('user_chart/',user_chart),
    path('comm_chart/',comm_chart),

]