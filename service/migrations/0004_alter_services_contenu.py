# Generated by Django 4.2 on 2023-04-11 07:28

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0003_alter_services_contenu'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='contenu',
            field=ckeditor.fields.RichTextField(),
        ),
    ]