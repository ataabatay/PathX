from django.db import models

# Create your models here.
class Coach(models.Model):
  name = models.CharField(max_length=255)
  session_types = models.ManyToManyField(
    to='session_types.Session_Type',
    related_name='coaches'
  )
  brief = models.CharField(max_length=1000, null=True, blank=True, default='Coach brief.')
  image = models.CharField(null=True, blank=True, default='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

  def __str__(self):
    return f'{self.name}'