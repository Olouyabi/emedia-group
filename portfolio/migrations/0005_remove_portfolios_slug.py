# Generated by Django 4.0.3 on 2023-02-24 09:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_remove_portfolios_categorie_gal_portfolios_categorie'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolios',
            name='slug',
        ),
    ]