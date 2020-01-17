from django.urls import path
from .views import *

'''from .models import Photo'''

app_name = 'board'

urlpatterns = [
    path('', main, name='main'),
    path('space1', space1, name='space1')
]