from rest_framework.serializers import ModelSerializer
from ..models import Session_Type

class Session_TypeSerializer(ModelSerializer):
  class Meta:
    model = Session_Type
    fields = '__all__'