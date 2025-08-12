from rest_framework import serializers
from .models import USER , WORKOUTS , SETTING

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = '__all__'

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = WORKOUTS
        fields = '__all__'

class SettingsSSerializer(serializers.ModelSerializer):
    class Meta:
        model = SETTING
        fields = '__all__'