from django.contrib import admin
from .models import User , Address , primeuser
# Register your models here.
admin.site.register(User)
admin.site.register(Address)
admin.site.register(primeuser)