from django.urls import path
from .views import SupportMessageListCreateView

urlpatterns = [
  path('',SupportMessageListCreateView.as_view())
]