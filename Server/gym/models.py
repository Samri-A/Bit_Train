from django.db import models
import uuid

class GYM(models.Model):
    GYM_ID = models.UUIDField( primary_key=True,default=uuid.uuid4)
    GYM_NAME = models.TextField(editable=True)
    GYM_LOCATION = models.TextField(editable=True)