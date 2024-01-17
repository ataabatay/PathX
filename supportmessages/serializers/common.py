from rest_framework.serializers import ModelSerializer
from ..models import SupportMessage

class SupportMessageSerializer(ModelSerializer):
  class Meta:
    model = SupportMessage
    fields = '__all__'