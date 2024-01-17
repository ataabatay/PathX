from django.db import models

# Create your models here.
class SupportMessage(models.Model):
  first_name = models.CharField(max_length=255)
  last_name = models.CharField(max_length=255)
  email = models.EmailField(max_length=255)
  message = models.TextField(max_length=3000)
  sent_at = models.DateTimeField(auto_now_add=True)
  active = models.BooleanField(default=True)

  def __str__(self):
    return f'Active: {self.active} - {self.first_name} - {self.last_name}: {self.sent_at}'