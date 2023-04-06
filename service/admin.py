from django.contrib import admin
from service.models import Services, Temoignages


@admin.register(Services)
class ServicesAdmin(admin.ModelAdmin):
    list_display = ('titre', 'slug', )
    prepopulated_fields = {'slug' : ('titre',)}
    search_fields = ('titre',)
    ordering = ('titre', 'slug', )
    list_filter = ('titre', 'slug',)



@admin.register(Temoignages)
class TemoignagesAdmin(admin.ModelAdmin):
    list_display = ('nom', 'titre', )
    prepopulated_fields = {'nom' : ('titre',)}
    search_fields = ('nom',)
    ordering = ('nom', 'titre', )
    list_filter = ('nom', 'titre',)

