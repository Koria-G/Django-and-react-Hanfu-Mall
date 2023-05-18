from django.db import models

# Create your models here.
from mall.models import *
from user.models import UserInfo
from mall.models import Goods
import datetime

class CartItem(models.Model):
    goodsid = models.PositiveIntegerField()
    colorid = models.PositiveIntegerField()
    sizeid = models.PositiveIntegerField()
    count = models.PositiveIntegerField()
    isdelete = models.BooleanField(default=False)
    user = models.ForeignKey(UserInfo,on_delete=models.CASCADE)


    class Meta:
        unique_together = ['goodsid','colorid','sizeid']



    def getGoods(self):
        return Goods.objects.get(id=self.goodsid)


    def getColor(self):
        return Color.objects.get(id=self.colorid)

    def getSize(self):
        return Size.objects.get(id=self.sizeid)


    def getTotalPrice(self):
        import math
        return math.ceil(float(self.getGoods().price)*int(self.count))

class ShoppingCart(models.Model):
    user = models.ForeignKey(UserInfo, verbose_name=u"用户",on_delete=models.CASCADE)
    goods = models.ForeignKey(Goods, verbose_name=u"商品",on_delete=models.CASCADE)
    nums = models.IntegerField(default=1, verbose_name="购买数量")

    add_time = models.DateTimeField(default=datetime.datetime.now(), verbose_name=u"添加时间")

    class Meta:
        verbose_name = '购物车'
        verbose_name_plural = verbose_name
        unique_together = ("user", "goods")  # 一个商品不应该在购物车中重复

    def __str__(self):
        return "%s(%d)".format(self.goods.gname, self.nums)