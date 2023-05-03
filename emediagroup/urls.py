"""emediagroup URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib.staticfiles.storage import staticfiles_storage
from django.contrib import admin
from django.urls import path, include
from . import views
from emediagroup.settings import STATIC_URL
from . import settings
from django.contrib.staticfiles.urls import static, staticfiles_urlpatterns # type: ignore
from django.views.generic.base import RedirectView


urlpatterns = [
    path('', include('blog.urls')),
    path('', include('service.urls')),
    path('', views.home, name='home'),
    path('admin/', admin.site.urls),
    path('favicon.ico/', RedirectView.as_view(url=staticfiles_storage.url('favicon.ico'))),
    path('editor/', include('django_summernote.urls')),
]

urlpatterns += staticfiles_urlpatterns()
# add condition in django urls file
if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)


