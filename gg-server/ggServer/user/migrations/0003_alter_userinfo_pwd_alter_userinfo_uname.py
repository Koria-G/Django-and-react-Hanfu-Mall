# Generated by Django 4.1.7 on 2023-05-06 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0002_alter_userinfo_uname"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userinfo",
            name="pwd",
            field=models.CharField(max_length=100, verbose_name="用户密码"),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="uname",
            field=models.CharField(max_length=100, verbose_name="用户姓名"),
        ),
    ]
