from rest_framework import serializers
from .models import Comm
class CommSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comm
        fields="__all__"