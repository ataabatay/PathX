from django.shortcuts import render
from django.contrib.auth import get_user_model
from .serializers.common import UserSerializer, RegistrationSerializer
from .serializers.populated import PopulatedUserSerializer
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
User = get_user_model()

# Create your views here.
class RegisterUserView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer

class ListUserView(ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

class RetrieveUpdateDestroyUserAPIView(RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = PopulatedUserSerializer
  permission_classes = [IsAuthenticated]