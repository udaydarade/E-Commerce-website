# Generated by Django 5.0.3 on 2024-03-20 16:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('order', '0002_initial'),
        ('product', '0001_initial'),
        ('user', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='cartitem',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='cart_item', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='order',
            name='address',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='order_item', to='user.address'),
        ),
        migrations.AddField(
            model_name='order',
            name='product_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='order_item', to='product.product'),
        ),
        migrations.AddField(
            model_name='order',
            name='seller',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='product.seller'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='order_item', to=settings.AUTH_USER_MODEL),
        ),
    ]