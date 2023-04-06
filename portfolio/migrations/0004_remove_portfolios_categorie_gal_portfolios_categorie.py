# Generated by Django 4.0.3 on 2023-02-23 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_categorieportfolio_remove_portfolios_categorie_gal_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolios',
            name='categorie_gal',
        ),
        migrations.AddField(
            model_name='portfolios',
            name='categorie',
            field=models.ManyToManyField(related_name='categorie', to='portfolio.categorieportfolio'),
        ),
    ]