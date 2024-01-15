from rest_framework.urls import path
from .views import CoachListView, CoachRetrieveView

urlpatterns = [
  path('', CoachListView.as_view()),
  path('<int:pk>/', CoachRetrieveView.as_view()),
]