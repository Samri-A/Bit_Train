from firebase_admin import db
from django.http import JsonResponse
from .serializer import Userserializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
@method_decorator(csrf_exempt , name='dispatch' )
class gymCheck(APIView):

    def get(self, request):
        PermissionClass = [AllowAny]
        return Response({
            "success": True,
                "message": "Welcome to our API service."}
                , status= status.HTTP_200_OK
        )

'''def update_user_status(request):
    user_id = request.user.id
    status = request.POST.get('status')

    user_ref = db.reference(f'/users/{user_id}/status')

    
    user_ref.set(status)

    
    current_status = user_ref.get()

    return JsonResponse({'message': 'Status updated!', 'new_status': current_status})
'''