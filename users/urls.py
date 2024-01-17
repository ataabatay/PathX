from django.urls import path
from .views import ListUserView, RegisterUserView, RetrieveUpdateDestroyUserAPIView

urlpatterns = [
  path('register/', RegisterUserView.as_view()),
  path('users/', ListUserView.as_view()),
  path('users/<int:pk>/', RetrieveUpdateDestroyUserAPIView.as_view()),
]