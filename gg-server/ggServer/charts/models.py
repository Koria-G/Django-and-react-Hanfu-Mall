from django.db import models

# Create your models here.
class ShowCharts(models.Model):
    chart_name = models.CharField(max_length=100,verbose_name="图表名称")
    chart_url = models.URLField(verbose_name="图表路径")
    class Meta:
      db_table = ''
      managed = True
      verbose_name = '图表绘制'
      verbose_name_plural = verbose_name

    def __str__(self):
        return 'ShowCharts:%s'%self.chart_name