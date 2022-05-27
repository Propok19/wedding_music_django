from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import logout

from .forms import RegisterForm

def register(response):
    if response.method == "POST":
        form = RegisterForm(response.POST)
        if form.is_valid():
            form.save()

        return redirect("/")
    else:
        form = RegisterForm()

    return render(response, "D:\\Andrey\\Learning\\wed_django\\wed_mus\\main\\templates\\registration\\sign-up.html", {"form":form})

def logout_request(request):
    logout(request)
    return redirect("D:\\Andrey\\Learning\\wed_django\\wed_mus\\main\\templates\\home\\index.html")
