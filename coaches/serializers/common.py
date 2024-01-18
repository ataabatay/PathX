from ..models import Coach
from rest_framework.serializers import ModelSerializer

class CoachSerializer(ModelSerializer):
  class Meta:
    model = Coach
    fields = '__all__'
