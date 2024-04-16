from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Hero, News

def get_hero(request):
    heroes = Hero.objects.all()
    heroes_json = [hero.to_json() for hero in heroes]
    return JsonResponse(heroes_json, safe=False)

def hero_detail(request, pk = None):
    try:
        hero = Hero.objects.get(id=pk)
        return JsonResponse(hero.to_json())
    except Hero.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
         })
    
def get_news(request):
    news = News.objects.all()
    news_json = [news.to_json() for news in news]
    return JsonResponse(news_json, safe=False)

