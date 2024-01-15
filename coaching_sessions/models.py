from django.db import models

# Create your models here.
class Coaching_Session(models.Model):
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='sessions'
  )
  session_type = models.ForeignKey(
    to='session_types.Session_Type',
    on_delete=models.PROTECT,
    blank=True,
    null=True,
    related_name='sessions'
  )
  coach = models.ForeignKey(
    to='coaches.Coach',
    on_delete=models.DO_NOTHING,
    blank=True,
    null=True,
    related_name='sessions'
  )
  scheduled_datetime = models.DateTimeField()
  upcoming = models.BooleanField(default=True)

  def __str__(self):
    return f'Coachee: {self.user} @ {self.scheduled_datetime}: {self.session_type} - {self.coach}'
