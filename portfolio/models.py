from django.db import models
from emediagroup import utilitaires
from django.template.defaultfilters import slugify



# Create your models here.

class CategoriePortfolio(models.Model):
    nom_categorie = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)

    class Meta:
        verbose_name = "Catégorie de portfolio"

    def __str__(self):
        return self.nom_categorie


class Portfolios(models.Model):
    categorie = models.ForeignKey(CategoriePortfolio, on_delete=models.SET_NULL, null=True)
    nom = models.CharField(max_length=200, blank=True)
    slug = models.SlugField(max_length=200, null=True)
    image = models.ImageField(upload_to='galeries', default='images/logo/logo_emedia-com.png')
    date_creation = models.DateTimeField(auto_now_add=True)
    status = models.CharField(choices=utilitaires.STATUS, default="actu", max_length=50)

    def __str__(self):
        return str(self.categorie)
    
    class Meta:
        verbose_name = "Portfolio"

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url
    
    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         self.slug = slugify(self.categorie)
    #     super().save(*args, **kwargs)
    