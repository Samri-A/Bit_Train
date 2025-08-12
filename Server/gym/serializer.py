from django.contrib.auth.models import Group, User
from rest_framework import serializers
class Userserializer(serializers.HyperlinkedModelSerializer):
    class meta:
        
        fields = ['url' , 'username' , 'email' , 'password']