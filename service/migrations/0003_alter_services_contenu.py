# Generated by Django 4.2 on 2023-04-11 03:41

from django.db import migrations
import djrichtextfield.models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0002_alter_services_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='contenu',
            field=djrichtextfield.models.RichTextField(),
        ),
    ]