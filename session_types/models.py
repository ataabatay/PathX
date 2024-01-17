from django.db import models

# Create your models here.
class Session_Type(models.Model):
  name = models.CharField(max_length=255)
  brief = models.CharField(max_length=255, default='Pocket full of sunshine')

  def __str__(self):
    return self.name