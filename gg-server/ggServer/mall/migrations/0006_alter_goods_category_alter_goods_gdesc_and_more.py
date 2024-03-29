# Generated by Django 4.1 on 2023-05-06 11:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("mall", "0005_goods_img"),
    ]

    operations = [
        migrations.AlterField(
            model_name="goods",
            name="category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="mall.category",
                verbose_name="商品分类",
            ),
        ),
        migrations.AlterField(
            model_name="goods",
            name="gdesc",
            field=models.CharField(max_length=100, verbose_name="商品描述"),
        ),
        migrations.AlterField(
            model_name="goods",
            name="gname",
            field=models.CharField(max_length=100, verbose_name="商品名称"),
        ),
        migrations.AlterField(
            model_name="goods",
            name="oldprice",
            field=models.DecimalField(
                decimal_places=2, max_digits=5, verbose_name="现价"
            ),
        ),
        migrations.AlterField(
            model_name="goods",
            name="price",
            field=models.DecimalField(
                decimal_places=2, max_digits=5, verbose_name="原价"
            ),
        ),
    ]
