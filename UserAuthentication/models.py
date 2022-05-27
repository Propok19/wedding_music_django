from django.db import models

class registration(models.Model):
    username = models. CharField(max_length=200)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.username
