from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('music/', views.songs, name="music"),
    path('play/<int:song_id>/', views.play_song, name='play_song'),
    path('all_songs/', views.songs, name='songs'),
]
