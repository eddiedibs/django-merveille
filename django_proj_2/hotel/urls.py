from django.urls import path
from . import views 


urlpatterns = [
    path('', views.home, name="hotel-main"),
    path('booknow/', views.booknow, name="hotel-booknow")
]
