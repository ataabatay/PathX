from .common import CoachSerializer
from session_types.serializers.common import Session_TypeSerializer

class PopulatedCoachSerializer(CoachSerializer):
  session_types = Session_TypeSerializer(many=True)