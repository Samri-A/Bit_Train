from rest_framework import viewsets
from .models import USER , WORKOUTS , SETTING
from .serializers import UserSerializer , WorkoutSerializer , SettingsSSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = USER.objects.all()
    serializer_class = UserSerializer

class WorkoutsViewSet(viewsets.ModelViewSet):
    queryset = WORKOUTS.objects.all()
    serializer_class = WorkoutSerializer

class SettingsViewSet(viewsets.ModelViewSet):
    queryset = SETTING.objects.all()
    serializer_class = SettingsSSerializer