from django.db import models
import uuid

class USER(models.Model):
    USER_ID = models.UUIDField(primary_key=True , default=uuid.uuid4 , editable=False)
    NAME = models.TextField(max_length=100)
    EMAIL = models.EmailField()
    GENDER = models.CharField()
    PASSWORD = models.TextField()
    AGE = models.PositiveIntegerField()
    GYM_LOCATION = models.TextField(null=True)
    HOME_LOCATION = models.TextField(null=True)

class WORKOUTS(models.Model):
    USER_ID = models.ForeignKey(USER , on_delete=models.CASCADE)
    EXERCISE_ID = models.TextField(blank=True, null=True)



class SETTING(models.Model):
     USER_ID = models.ForeignKey(USER  , on_delete=models.CASCADE)
     is_darkmode = models.BooleanField(default=True , null=False)


class TRACK(models.Model):
    USER_ID = models.ForeignKey( USER, on_delete=models.CASCADE)
