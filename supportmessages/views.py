from django.shortcuts import render
from .serializers.common import SupportMessageSerializer
from rest_framework.generics import ListCreateAPIView
from .models import SupportMessage

# Create your views here.
class SupportMessageListCreateView(ListCreateAPIView):
  queryset = SupportMessage.objects.all()
  serializer_class = SupportMessageSerializer
