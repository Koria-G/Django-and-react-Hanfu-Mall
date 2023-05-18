from . import views
from django.urls import path
urlpatterns=[
    path('',views.index),
    path('alipay_return/',views.alipay_return)
]