# Generated by Django 4.0.3 on 2023-02-24 14:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_portfolios_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolios',
            name='categorie',
        ),
        migrations.AddField(
            model_name='portfolios',
            name='categorie',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='portfolio.categorieportfolio'),
        ),
    ]