from django.db import models

# Create your models here.
class Comm(models.Model):
    avatar = models.ImageField(upload_to='media/comm/',verbose_name="头像")
    title = models.CharField(max_length=100,verbose_name="用户姓名")
    description = models.CharField(max_length=100,verbose_name="用户简介")
    content=models.TextField(max_length=10000,verbose_name="发布内容")
    vedio_comm=models.FileField(upload_to='media/vedio/',verbose_name="发布视频")
    img_comm=models.ImageField(upload_to='media/image/',verbose_name="发布图片")

    class Meta:
        verbose_name = '文化交流'
        verbose_name_plural = verbose_name

    def __str__(self):
        return 'Comm:%s'%self.title