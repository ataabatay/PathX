from django.shortcuts import render
from django.contrib.auth import get_user_model
from .serializers.common import RegistrationSerializer
from rest_framework.generics import CreateAPIView
User = get_user_model()

# Create your views here.
class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer