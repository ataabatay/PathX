from ..models import Coach
from rest_framework.serializers import ModelSerializer

class CoachSerializer(ModelSerializer):
  class Meta:
    model = Coach
    fields = ['id','name', 'session_types']
