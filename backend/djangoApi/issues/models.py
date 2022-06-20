from django.db import models

class Issue(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField(blank=True, default='')
    votes = models.SmallIntegerField(default=0)

    class Meta: 
        ordering = ['created']

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    issue = models.ForeignKey('Issue', related_name='comments', on_delete=models.CASCADE)

    class Meta: 
        ordering = ['created']