# Create your views here.
from django.shortcuts import render,redirect
from . models import *


def songs(request):
    all_songs = Song.objects.all()
    last_played_song = Song.objects.get(id=4)

    context = {
        "songs": all_songs,
        'last_played': last_played_song,
    }
    return render(request,"music_player/music-page.html",context=context)


def play_song(request, song_id):
    all_songs = Song.objects.filter(id=song_id).first()
    # Add data to recent database
    if list(Recent.objects.filter(song=all_songs,user=request.user).values()):
        data = Recent.objects.filter(song=all_songs,user=request.user)
        data.delete()
    data = Recent(song=all_songs,user=request.user)
    data.save()
    return redirect('songs')
