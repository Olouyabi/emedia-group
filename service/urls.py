from django.urls import path
from service import views


urlpatterns = [
    path('services/', views.services),

]