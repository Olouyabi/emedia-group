from django.contrib import admin
from portfolio.models import Portfolios
from portfolio.models import CategoriePortfolio

# Register your models here.
@admin.register(CategoriePortfolio)
class PostCategoryAdmin(admin.ModelAdmin):
    list_display = ('nom_categorie', 'slug', )
    prepopulated_fields = {'slug' : ('nom_categorie',)}
    search_fields = ('nom_categorie',)
    ordering = ('nom_categorie', 'slug', )
    list_filter = ('nom_categorie', 'slug',)


@admin.register(Portfolios)
class PortfoliosAdmin(admin.ModelAdmin):
    list_display = ('categorie', 'nom', 'status', 'date_creation',)
    prepopulated_fields = {'slug' : ('nom',)}
    search_fields = ('id', 'categorie',)
    ordering = ('id', 'categorie', )
    list_filter = ('categorie', 'status',)


