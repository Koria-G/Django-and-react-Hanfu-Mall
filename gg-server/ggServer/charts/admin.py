from django.contrib import admin
# from mall.models import Category
from .models import ShowCharts

# Register your models here.
@admin.register(ShowCharts)
class chartAdmin(admin.ModelAdmin):
    list_display=(
        'id','chart_name','chart_url'
    )
    list_display_links=('chart_url',)
