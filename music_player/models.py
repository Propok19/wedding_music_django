from django.db import models
from django.contrib.auth.models import User

class Song(models.Model):
    title= models.TextField()
    artist= models.TextField()
    audio_file = models.URLField()
    price = models.TextField(default=False)
    desciption = models.TextField(default=False)
    play_time = models.IntegerField(default=False)
    bpm = models.IntegerField(default=False)

    def __str__(self):
        return self.title

class Recent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
