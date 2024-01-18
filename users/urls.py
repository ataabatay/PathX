from django.urls import path
from .views import ListUserView, RegisterUserView, RetrieveUpdateDestroyUserAPIView
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
  path('register/', RegisterUserView.as_view()),
  path('users/', ListUserView.as_view()),
  path('users/<int:pk>/', RetrieveUpdateDestroyUserAPIView.as_view()),
  path('login/', TokenObtainPairView.as_view())
]