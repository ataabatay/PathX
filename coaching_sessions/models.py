from django.db import models

# Create your models here.
class Coaching_Session(models.Model):
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='coaching_sessions'
  )
  session_type = models.ForeignKey(
    to='session_types.Session_Type',
    on_delete=models.PROTECT,
    related_name='coaching_sessions',
    blank=True,
    null=True
  )
  coach = models.ForeignKey(
    to='coaches.Coach',
    on_delete=models.DO_NOTHING,
    related_name='sessions',
    blank=True,
    null=True
  )
  scheduled_date = models.DateField()
  scheduled_time = models.TimeField()
  upcoming = models.BooleanField(default=True)

  def __str__(self):
    return f'Coachee: {self.owner} @ {self.scheduled_date}: {self.session_type} - {self.coach}'