from django.shortcuts import render
from .models import Session_Type
from .serializers.populated import PopulatedSession_TypeSerializer
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.
class Session_TypeListCreateView(ListAPIView):
  queryset = Session_Type.objects.all()
  serializer_class = PopulatedSession_TypeSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
