from django.shortcuts import render
from django.http import HttpResponse





def home(request):
    return render(request, 'hotel/home.html')





def about(request):
    return render(request, 'hotel/about.html')







