from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class Questionnaire(models.Model):
  owner = models.OneToOneField(
    to='users.User',
    on_delete=models.CASCADE,
    null=True,
    blank=True,
    related_name='answers'
  )
  POSSIBLE_ANSWERS = {
    "a": "option a",
    "b": "option b",
    "c": "option c",
    "d": "option d",
    "e": "option e",
  }

  question1answer = models.CharField(max_length=1, choices=POSSIBLE_ANSWERS)
  question2answer = models.CharField(max_length=1, choices=POSSIBLE_ANSWERS)
  question3answer = models.CharField(max_length=1, choices=POSSIBLE_ANSWERS) 
  question4answer = models.CharField(max_length=1, choices=POSSIBLE_ANSWERS)
  question5answer = models.CharField(max_length=1, choices=POSSIBLE_ANSWERS) 

  def __str__(self):
    return f"User -> {self.owner}"
