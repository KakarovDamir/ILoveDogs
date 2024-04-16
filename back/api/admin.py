from django.contrib import admin
from api.models import Hero, News
#Damir11

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content','source', 'url')
    search_fields = ('title',)

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'url', 'date')
    search_fields = ('title',)