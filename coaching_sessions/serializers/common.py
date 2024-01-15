from ..models import Coaching_Session
from rest_framework.serializers import ModelSerializer

class Coaching_SessionSerializer(ModelSerializer):
  class Meta:
    model = Coaching_Session
    fields = '__all__'