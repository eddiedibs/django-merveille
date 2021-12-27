from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
from django.contrib.auth.forms import UserCreationForm





def home(request):
    form = UserCreationForm()
    context = {
        'posts': Post.objects.all(),
        'form': form
    }
    return render(request, 'hotel/home.html', context)





def booknow(request):
    return render(request, 'hotel/booknow.html')







