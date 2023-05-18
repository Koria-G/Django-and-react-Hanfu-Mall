from django.db import models

from user.models import Address,UserInfo
# Create your models here.
class Order(models.Model):
    out_trade_num = models.UUIDField()
    order_num = models.CharField(max_length=50)
    trade_no = models.CharField(max_length=120,default='')
    status = models.CharField(max_length=20,default='待支付')
    payway = models.CharField(max_length=20,default='alipay')
    address = models.ForeignKey(Address,on_delete=models.CASCADE)
    user = models.ForeignKey(UserInfo,on_delete=models.CASCADE)