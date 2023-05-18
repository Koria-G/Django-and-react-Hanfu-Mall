from django.contrib import admin
from .models import ShoppingCart
from import_export.admin import ImportExportModelAdmin
from django.utils.safestring import mark_safe

# Register your models here.

class Cart_Manager(ImportExportModelAdmin):
    list_display=["id","user","goods","nums","add_time"]
    list_filter=["user"]
    list_per_page=5
    

admin.site.register(ShoppingCart,Cart_Manager)
