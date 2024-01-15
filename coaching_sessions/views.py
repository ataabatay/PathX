from django.shortcuts import render
from .serializers.common import Coaching_SessionSerializer
from .models import Coaching_Session
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# Create your views here.
class Coaching_SessionListCreateView(ListCreateAPIView):
  queryset = Coaching_Session.objects.all()
  serializer_class = Coaching_SessionSerializer

class Coaching_SessionRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
  queryset = Coaching_Session.objects.all()
  serializer_class = Coaching_SessionSerializer
