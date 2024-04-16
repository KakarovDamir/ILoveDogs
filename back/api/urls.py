from django.urls import path
from . import views

urlpatterns = [
    path('hero/', views.get_hero),
    path('hero/<int:pk>/', views.hero_detail),
    path('news/', views.get_news),
]