from rest_framework.urls import path
from .views import Coaching_SessionListCreateView, Coaching_SessionRetrieveUpdateDestroyView

urlpatterns = [
  path('', Coaching_SessionListCreateView.as_view()),
  path('<int:pk>/', Coaching_SessionRetrieveUpdateDestroyView.as_view()),
]