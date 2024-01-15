from django.shortcuts import render
from django.contrib.auth import get_user_model
from .serializers.common import UserSerializer, RegistrationSerializer
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
User = get_user_model()

# Create your views here.
class RegisterUserView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer

class ListUserView(ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class RetrieveUpdateDestroyUserAPIView(RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer