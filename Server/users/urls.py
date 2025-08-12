from django.urls import path , include
from .views import UserViewSet , WorkoutsViewSet , SettingsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users' , UserViewSet)
router.register(r'workout', WorkoutsViewSet)
router.register(r'settings', SettingsViewSet)
urlpatterns = [
    path('' ,include(router.urls)),
]
