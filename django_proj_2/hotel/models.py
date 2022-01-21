from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.firstName + f' post.(id={self.id})'