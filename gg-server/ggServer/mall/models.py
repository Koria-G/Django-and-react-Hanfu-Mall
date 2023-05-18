# -*- coding: utf-8 -*-


from django.db import models

# Create your models here.
class Category(models.Model):
    cname = models.CharField(max_length=10)

    class  Meta:
        verbose_name = '分类详情'
        verbose_name_plural = verbose_name

    def __str__(self):
        return 'Category:%s'%self.cname

class Goods(models.Model):
    gname = models.CharField(max_length=100,verbose_name="商品名称")
    gdesc = models.CharField(max_length=100,verbose_name="商品描述")
    oldprice = models.DecimalField(max_digits=5,decimal_places=2,verbose_name="现价")
    price = models.DecimalField(max_digits=5,decimal_places=2,verbose_name="原价")
    category = models.ForeignKey(Category,on_delete=models.CASCADE,verbose_name="商品分类")
    img=models.ImageField(upload_to='goods/')

    class Meta:
        verbose_name = '商品信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return 'Goods:%s'%self.gname
    
    # 后台显示图片
    # def image_data(self):
    #     if self.img:
    #         return format_html('<img src="media/{}" width="156px" height="98px"/>',self.img)
    #     else:
    #         return format('<img src="media/{}" width="156px" height="98px"/>',)
    
     #获取商品的大图
    # def getGImg(self):
    #     return self.inventory_set.first().color.colorurl

    #获取商品所有颜色对象
    # def getColorList(self):
    #     colorList = []
    #     for inventory in self.inventory_set.all():
    #         color = inventory.color
    #         if color not in colorList:
    #             colorList.append(color)

    #     return colorList

    # def getSizeList(self):
    #     sizeList = []
    #     for inventory in self.inventory_set.all():
    #         size = inventory.size
    #         if size not in sizeList:
    #             sizeList.append(size)

    #     return sizeList

    # #获取所有的详情信息
    # def getDetailList(self):
    #     import collections
    #     #创建一个有序字典用于存放详情信息（key:详情名称value:图片列表）
    #     datas = collections.OrderedDict()

    #     for goodsdetail in self.goodsdetail_set.all():
    #         #获取详情名称
    #         gdname = goodsdetail.name()
    #         if not datas.has_key(gdname):
    #             datas[gdname] = [goodsdetail.gdurl]
    #         else:
    #             datas[gdname].append(goodsdetail.gdurl)

    #     return datas


class GoodsDetailName(models.Model):
    gdname = models.CharField(max_length=30)

    class Meta:
        verbose_name = '商品详情小标题'
        verbose_name_plural = verbose_name

    def __str__(self):
        return 'GoodsDetailName:%s'%self.gdname

class GoodsDetail(models.Model):
    gdurl = models.ImageField(upload_to='')
    gdname = models.ForeignKey(GoodsDetailName,on_delete=models.CASCADE,related_name='detail_name',db_constraint=False)
    goods = models.ForeignKey(Goods,on_delete=models.CASCADE,related_name='goods_detail',db_constraint=False)

    class Meta:
        verbose_name = '商品详情'
        verbose_name_plural = verbose_name

class Size(models.Model):
    sname = models.CharField(max_length=10)

    class Meta:
        verbose_name = 'SIZE'
        verbose_name_plural = verbose_name

    def __str__(self):
        return 'Size:%s'%self.sname


class Color(models.Model):
    colorname = models.CharField(max_length=10)
    colorurl = models.ImageField(upload_to='color/')

    class Meta:
        verbose_name = 'Color'
        verbose_name_plural = verbose_name

    def __str__(self):
        return 'Color:%s'%self.colorname

class Inventory(models.Model):
    count = models.PositiveIntegerField()
    color = models.ForeignKey(Color,on_delete=models.CASCADE,related_name='goods_color',db_constraint=False)
    goods = models.ForeignKey(Goods,on_delete=models.CASCADE,related_name='goods_stock',db_constraint=False)
    size = models.ForeignKey(Size,on_delete=models.CASCADE,related_name='goods_size',db_constraint=False)

    class Meta:
        verbose_name = 'Stock'
        verbose_name_plural = verbose_name



