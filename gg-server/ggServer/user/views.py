from django.shortcuts import render
from .serializers import UserInfoSerializers,AddresSerializers,AreaSerializers,AddressSerializers
from rest_framework import generics,viewsets
from .models import UserInfo,Address,Area

from django.contrib.auth.hashers import make_password,check_password
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class UserInfoView(generics.ListCreateAPIView):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializers
    
class AddressView(generics.ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializers

class AreaView(generics.ListCreateAPIView):
    queryset = Area.objects.all()
    serializer_class = AreaSerializers


class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password1 = request.data.get('password1')
        password2 = request.data.get('password2')
        if UserInfo.objects.filter(uname=username):
            return Response({'msg': '该用户已注册！', 'code': 400})
        else:
            if password1 == password2:
                user_data = {'uname': username, 'pwd': make_password(password1)}
                user_serializer = UserInfoSerializers(data=user_data)
                if user_serializer.is_valid():
                    user_serializer.save()
                    return Response({'msg': '注册成功！', 'code': 200})
                else:
                    return Response({'msg': user_serializer.errors, 'code': 400})
            else:
                return Response({'msg': '两次密码不一致！', 'code': 400})
            
class LoginView(APIView):
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = UserInfo.objects.filter(uname=username).first()
        if user and check_password(password, user.pwd):
            return Response({'msg': '登录成功', 'code': 200, 'user_id': user.id})
        else:
            return Response({'msg': '登录失败', 'code': 400})

# 修改用户信息
class updataUser(viewsets.ModelViewSet):
    queryset=UserInfo.objects.all()
    serializer_class=UserInfoSerializers

# 修改地址信息
class updataAddress(viewsets.ModelViewSet):
    queryset=Address.objects.all()
    serializer_class=AddresSerializers  