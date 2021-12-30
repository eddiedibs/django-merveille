from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Post




class UserCommentForm(forms.ModelForm):
        firstName = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'First name'}))
        lastName = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Last name'}))
        email = forms.EmailField(widget=forms.TextInput(attrs={'placeholder':'Email address'}))
        content = forms.CharField(widget=forms.Textarea(attrs={'placeholder':'Comments'}))

        class Meta:
                model = Post
                fields = ['firstName', 'lastName', 'email', 'content']