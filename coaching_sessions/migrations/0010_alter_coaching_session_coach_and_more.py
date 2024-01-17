# Generated by Django 5.0.1 on 2024-01-17 22:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coaches', '0001_initial'),
        ('coaching_sessions', '0009_alter_coaching_session_coach_and_more'),
        ('session_types', '0002_rename_session_types_session_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coaching_session',
            name='coach',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='sessions', to='coaches.coach'),
        ),
        migrations.AlterField(
            model_name='coaching_session',
            name='session_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='sessions', to='session_types.session_type'),
        ),
    ]
