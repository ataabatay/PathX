from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()
from coaching_sessions.serializers.common import Coaching_SessionSerializer

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)
  
  class Meta:
    model = User
    fields = '__all__'

class RegistrationSerializer(UserSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'password_confirmation')

  def validate(self, data):
    password = data.get('password')
    password_confirmation = data.pop('password_confirmation')

    if password != password_confirmation:
      raise serializers.ValidationError('Passwords do not match.')
    return data
  
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user