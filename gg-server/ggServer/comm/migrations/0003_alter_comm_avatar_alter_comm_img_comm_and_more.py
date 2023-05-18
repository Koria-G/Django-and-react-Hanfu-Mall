# Generated by Django 4.1.7 on 2023-03-25 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("comm", "0002_alter_comm_img_comm_alter_comm_vedio_comm"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comm",
            name="avatar",
            field=models.ImageField(upload_to="media/comm/", verbose_name="头像"),
        ),
        migrations.AlterField(
            model_name="comm",
            name="img_comm",
            field=models.ImageField(upload_to="media/image/", verbose_name="发布图片"),
        ),
        migrations.AlterField(
            model_name="comm",
            name="vedio_comm",
            field=models.FileField(upload_to="media/vedio/", verbose_name="发布视频"),
        ),
    ]
