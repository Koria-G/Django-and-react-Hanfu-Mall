from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Area(models.Model):
    """
    行政区划
    """
    name = models.CharField(max_length=20, verbose_name='名称')
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, related_name='subs', null=True, blank=True, verbose_name='上级行政区划')

    class Meta:
        db_table = 'areas'
        verbose_name = '行政区划'
        verbose_name_plural = '行政区划'

    def __str__(self):
        return self.name

class UserInfo(models.Model):
    uname = models.CharField(max_length=100,verbose_name="用户姓名")
    pwd = models.CharField(max_length=100,verbose_name="用户密码")


    def __str__(self):
        return self.uname

class Address(models.Model):
    aname = models.CharField(max_length=30)
    aphone = models.CharField(max_length=11)
    addr = models.CharField(max_length=100)
    isdefault = models.BooleanField(default=False)
    userinfo = models.ForeignKey(UserInfo,on_delete=models.CASCADE)

    def __str__(self):
        return self.aname

