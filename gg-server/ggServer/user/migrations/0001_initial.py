# Generated by Django 4.1.7 on 2023-03-13 13:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="UserInfo",
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
                ("uname", models.EmailField(max_length=100)),
                ("pwd", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="Area",
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
                ("name", models.CharField(max_length=20, verbose_name="名称")),
                (
                    "parent",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="subs",
                        to="user.area",
                        verbose_name="上级行政区划",
                    ),
                ),
            ],
            options={
                "verbose_name": "行政区划",
                "verbose_name_plural": "行政区划",
                "db_table": "areas",
            },
        ),
        migrations.CreateModel(
            name="Address",
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
                ("aname", models.CharField(max_length=30)),
                ("aphone", models.CharField(max_length=11)),
                ("addr", models.CharField(max_length=100)),
                ("isdefault", models.BooleanField(default=False)),
                (
                    "userinfo",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="user.userinfo"
                    ),
                ),
            ],
        ),
    ]