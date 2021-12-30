from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Post
from .forms import UserCommentForm
from django.contrib import messages




def home(request):

    if request.method == 'POST':
        form = UserCommentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('hotel-main')

    else: 
        form = UserCommentForm()


    context = {
        'posts': Post.objects.all(),
        'forms': form
    }
    return render(request, 'hotel/home.html', context)





def booknow(request):
    return render(request, 'hotel/booknow.html')







