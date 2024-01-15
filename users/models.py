from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
  first_name = models.CharField(max_length=255)
  last_name = models.CharField(max_length=255)
  email = models.EmailField(max_length=255, unique=True)

  def __str__(self):
    if self.username == 'admin':
      return 'admin'
    return f'{self.id} - {self.first_name} {self.last_name}'
