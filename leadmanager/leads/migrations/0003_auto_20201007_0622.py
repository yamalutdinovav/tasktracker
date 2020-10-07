# Generated by Django 3.1.2 on 2020-10-07 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_lead_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lead',
            name='email',
        ),
        migrations.RemoveField(
            model_name='lead',
            name='owner',
        ),
        migrations.AddField(
            model_name='lead',
            name='status',
            field=models.IntegerField(default=1),
        ),
    ]
