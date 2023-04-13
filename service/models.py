from django.db import models
from emediagroup import utilitaires
# from djrichtextfield.models import RichTextField
from ckeditor.fields import RichTextField

# Create your models here.

class Services(models.Model):
    titre = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    image = models.ImageField(upload_to='services', default='services/logo_emedia-com.png')
    contenu = RichTextField()
    date_creation = models.DateTimeField(auto_now_add=True)
    status = models.CharField(choices=utilitaires.STATUS, default="actu", max_length=50)

    def __str__(self):
        return self.titre
    
    class Meta:
        verbose_name = "Service"

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url


class Temoignages(models.Model):
    image = models.ImageField(upload_to='avis', default='avis/avatar-default.png')
    nom = models.CharField(max_length=200)
    titre = models.CharField(max_length=200)
    avis = models.TextField(default='Avis positifs')
    status = models.CharField(choices=utilitaires.STATUS, default="actu", max_length=50)
    date_creation = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.nom
    
    class Meta:
        verbose_name = "Temoignage"


    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url