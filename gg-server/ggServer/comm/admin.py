from django.contrib import admin
from .models import Comm
from import_export.admin import ImportExportModelAdmin
from django.utils.safestring import mark_safe

# Register your models here.

class Comm_Manager(ImportExportModelAdmin):
    list_display=["id","avatar_data","title","description","content","img_data","vedio_comm"]
    list_filter=["title"]
    list_per_page=5
    readonly_fields=('img_data','avatar_data')
    def img_data(self,obj):
        return mark_safe('<img src="%s" width="100px" />'%obj.img_comm.url)
    img_data.short_description="图片样式"

    def avatar_data(self,obj):
        return mark_safe('<img src="%s" width="50px" />'%obj.avatar.url)
    avatar_data.short_description="用户头像"

admin.site.register(Comm,Comm_Manager)
