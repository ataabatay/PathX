from django.urls import path
from .views import Session_TypeListCreateView

urlpatterns = [
  path('',Session_TypeListCreateView.as_view())
]