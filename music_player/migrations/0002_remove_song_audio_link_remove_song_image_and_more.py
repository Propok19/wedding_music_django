# Generated by Django 4.0.4 on 2022-05-31 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music_player', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='audio_link',
        ),
        migrations.RemoveField(
            model_name='song',
            name='image',
        ),
        migrations.AlterField(
            model_name='song',
            name='audio_file',
            field=models.FileField(null=True, upload_to='wed_mus/media/music_player/'),
        ),
    ]
