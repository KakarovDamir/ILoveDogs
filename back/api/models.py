from django.db import models

class Hero(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    source = models.CharField(max_length=255)
    url = models.CharField(max_length=255)

    def __str__(self):
        return f"ID: {self.id}, Title: {self.title}, Content: {self.content}, Source: {self.source}, URL: {self.url}"
    
    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'source': self.source,
            'url': self.url
        }
    class Meta:
        verbose_name='Hero'
        verbose_name_plural = 'Heroes'

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    url = models.CharField(max_length=255)
    date = models.CharField(max_length=255)

    def __str__(self):
        return f"ID: {self.id}, Title: {self.title}, Content: {self.content}, URL: {self.url}, Date: {self.date}"
    
    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'url': self.url,
            'date': self.date
        }
    class Meta:
        verbose_name='News'
        verbose_name_plural = 'News'