from user.models import UserInfo,Address,Area
from rest_framework import serializers

class UserInfoSerializers(serializers.ModelSerializer):
    class Meta:
      model=UserInfo
      fields='__all__'

class AddresSerializers(serializers.ModelSerializer):
    userinfo_name=serializers.ReadOnlyField(source="userinfo.uname")
    # userinfo_name=serializers.SerializerMethodField(read_only=True)
    # def get_userinfo_name(self,obj):
    #    return obj.userinfo.uname
    class Meta:
      model=Address
      fields=['id',"userinfo_name","aphone","addr"]

class AddressSerializers(serializers.ModelSerializer):
    userinfo_name=serializers.ReadOnlyField(source="userinfo.uname")
    # userinfo_name=serializers.SerializerMethodField(read_only=True)
    # def get_userinfo_name(self,obj):
    #    return obj.userinfo.uname
    class Meta:
      model=Address
      fields='__all__'

class AreaSerializers(serializers.ModelSerializer):
    class Meta:
      model=Area
      fields='__all__'
