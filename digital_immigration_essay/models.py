from django.db import models
from datetime import datetime, date, timedelta


class QuizLog(models.Model):
    political_view = models.CharField(max_length = 1, null = True)
    correct_answers = models.IntegerField(default = 0)
    quiz_id = models.IntegerField()
