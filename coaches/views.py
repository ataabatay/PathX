from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers.common import CoachSerializer
from .serializers.populated import PopulatedCoachSerializer
from .models import Coach
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

# Path 'coaches/'
# Method GET all
class CoachListView(ListAPIView):
  queryset = Coach.objects.all()
  serializer_class = PopulatedCoachSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

# Path 'coaches/:id'
# Method GET single
class CoachRetrieveView(RetrieveAPIView):
  queryset = Coach.objects.all()
  serializer_class = PopulatedCoachSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
