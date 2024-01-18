from .common import UserSerializer
from coaching_sessions.serializers.common import Coaching_SessionSerializer

class PopulatedUserSerializer(UserSerializer):
  coaching_sessions = Coaching_SessionSerializer(many=True)
