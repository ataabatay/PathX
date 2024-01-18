from django.shortcuts import render
from .serializers.common import Coaching_SessionSerializer
from .models import Coaching_Session
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly

# Create your views here.
class Coaching_SessionListCreateView(OwnerListCreateView):
  queryset = Coaching_Session.objects.all()
  serializer_class = Coaching_SessionSerializer
  permission_classes = [IsAuthenticated]

class Coaching_SessionRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
  queryset = Coaching_Session.objects.all()
  serializer_class = Coaching_SessionSerializer
  permission_classes = [IsOwnerOrReadOnly]
