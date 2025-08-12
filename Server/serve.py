from waitress import serve
from Server.wsgi import application

serve(application, host='0.0.0.0' , port=8000)
print("running in 0.0.0.0/8000")