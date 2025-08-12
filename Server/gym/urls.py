from .views import *
from django.urls import path
urlpatterns = [
    path('' , gymCheck.as_view())
]