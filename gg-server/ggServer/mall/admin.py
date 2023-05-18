from django.contrib import admin
from .models import Goods
from import_export.admin import ImportExportModelAdmin
from django.utils.safestring import mark_safe

# Register your models here.
admin.site.site_header="koria 汉服管理商城后台"
admin.site.site_title="koria 汉服管理商城后台"
admin.site.index_title="koria 汉服管理商城后台"

# 显示数据goods里面的数据
# 外键
def category(obj):
    return obj.category.cname

class goods_Manager(ImportExportModelAdmin):
    list_display=["id","gname","gdesc","oldprice","price","img_data",category]
    list_filter=["category"]
    list_display_links=['gname']
    list_per_page=5
    readonly_fields=('img_data',)
    def img_data(self,obj):
        return mark_safe('<img src="%s" width="100px" />'%obj.img.url)
    img_data.short_description="图片样式"
    category.short_description="商品分类"

admin.site.register(Goods,goods_Manager)
