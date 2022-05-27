from django.shortcuts import render
from django.http import HttpResponse

def home(response):
    return render(response, "D:\\Andrey\\Learning\\wed_django\\wed_mus\\main\\templates\\home\\index.html", {})
