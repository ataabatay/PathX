from django.db import models

# Create your models here.
class Coach(models.Model):
  name = models.CharField(max_length=255)
  session_types = models.ManyToManyField(
    to='session_types.Session_Type',
    related_name='coaches'
  )
  brief = models.CharField(max_length=1000, null=True, blank=True, default='Coach brief.')

  def __str__(self):
    return f'{self.name}'