from .common import Session_TypeSerializer
from coaches.serializers.common import CoachSerializer

class PopulatedSession_TypeSerializer(Session_TypeSerializer):
  coaches = CoachSerializer(many=True)