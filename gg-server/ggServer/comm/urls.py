from django.urls import path,include
from comm import views
from .views import CommView
urlpatterns = [
    path('comm/', CommView.as_view()),
]