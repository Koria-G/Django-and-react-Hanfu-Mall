from django.shortcuts import render
from rest_framework import generics
from .serializers import CommSerializer
from .models import Comm

# Create your views here.
class CommView(generics.ListCreateAPIView):
    queryset = Comm.objects.all()
    serializer_class = CommSerializer