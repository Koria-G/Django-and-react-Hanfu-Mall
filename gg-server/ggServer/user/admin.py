from django.contrib import admin
from .models import UserInfo,Address
from import_export.admin import ImportExportModelAdmin
# Register your models here.
class User_Manager(ImportExportModelAdmin):
    list_display=["id","uname","pwd"]
    # list_editable=["uname","pwd"]
    # list_display_links=["uname"]
    list_per_page=5

class Address_Manager(ImportExportModelAdmin):
    list_display=["id","aname","aphone","addr","isdefault","userinfo"]
    # list_editable=["uname","pwd"]
    # list_display_links=["uname"]
    list_per_page=5

admin.site.register(Address,Address_Manager)

admin.site.register(UserInfo,User_Manager)