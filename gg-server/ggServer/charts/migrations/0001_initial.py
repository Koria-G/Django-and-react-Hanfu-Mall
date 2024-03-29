# Generated by Django 4.1.7 on 2023-03-26 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ShowCharts",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("chart_name", models.CharField(max_length=100, verbose_name="图表名称")),
                ("title", models.URLField(verbose_name="图表路径")),
            ],
            options={
                "verbose_name": "图表绘制",
                "verbose_name_plural": "图表绘制",
                "db_table": "",
                "managed": True,
            },
        ),
    ]
