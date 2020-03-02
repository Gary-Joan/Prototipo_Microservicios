from django.shortcuts import render
from rest_framework import generics
from .serializers import TodoSerializer
from .models import Todo

class TodoView(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()