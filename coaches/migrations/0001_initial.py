# Generated by Django 5.0.1 on 2024-01-12 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('session_types', '0002_rename_session_types_session_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coach',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('session_types', models.ManyToManyField(related_name='coaches', to='session_types.session_type')),
            ],
        ),
    ]
