# Generated by Django 4.0.3 on 2023-02-23 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolios',
            name='categorie_gal',
        ),
        migrations.AddField(
            model_name='portfolios',
            name='categorie_gal',
            field=models.CharField(default='Tout', max_length=100),
        ),
        migrations.DeleteModel(
            name='CategoriePortfolio',
        ),
    ]
