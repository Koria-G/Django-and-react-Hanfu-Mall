# Generated by Django 4.1.7 on 2023-03-21 14:22

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("user", "0002_alter_userinfo_uname"),
        ("mall", "0005_goods_img"),
    ]

    operations = [
        migrations.CreateModel(
            name="ShoppingCart",
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
                ("nums", models.IntegerField(default=1, verbose_name="购买数量")),
                (
                    "add_time",
                    models.DateTimeField(
                        default=datetime.datetime(2023, 3, 21, 22, 22, 41, 807498),
                        verbose_name="添加时间",
                    ),
                ),
                (
                    "goods",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="mall.goods",
                        verbose_name="商品",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="user.userinfo",
                        verbose_name="用户",
                    ),
                ),
            ],
            options={
                "verbose_name": "购物车",
                "verbose_name_plural": "购物车",
                "unique_together": {("user", "goods")},
            },
        ),
        migrations.CreateModel(
            name="CartItem",
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
                ("goodsid", models.PositiveIntegerField()),
                ("colorid", models.PositiveIntegerField()),
                ("sizeid", models.PositiveIntegerField()),
                ("count", models.PositiveIntegerField()),
                ("isdelete", models.BooleanField(default=False)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="user.userinfo"
                    ),
                ),
            ],
            options={"unique_together": {("goodsid", "colorid", "sizeid")},},
        ),
    ]