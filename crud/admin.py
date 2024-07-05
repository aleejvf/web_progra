from django.contrib import admin
from .models import Producto,User,Registro,RegistroItem

class ProductoAdmin(admin.ModelAdmin):  # Corrige la herencia aquí
    list_display = ('id','nombre','foto', 'descripcion', 'precio', 'cantidad_disponible', 'categoria','tamaño')
    search_fields = ['nombre']
admin.site.register(Producto, ProductoAdmin)

admin.site.register(User)

admin.site.register(Registro)
admin.site.register(RegistroItem)