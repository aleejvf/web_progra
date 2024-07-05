from django.contrib import admin
from .models import Carrito_item,Carrito, User, Producto,Registro,RegistroItem


# VISTA PARA PROBAR EN EL ADMIN DJANGO
class AdmcarritoI(admin.ModelAdmin):
    list_display= ['producto','carrito','cantidad']
    list_filter=['cantidad']

class ProductoAdmin(admin.ModelAdmin):  # Corrige la herencia aquí
    list_display = ('id','nombre','foto', 'descripcion', 'precio', 'cantidad_disponible', 'categoria','tamaño')
    search_fields = ['nombre']


# PARA PROBAR EN EL ADMIN DJANGO
admin.site.register(Registro)
admin.site.register(RegistroItem)
admin.site.register(Carrito)
admin.site.register(Carrito_item,AdmcarritoI)
admin.site.register(User)


admin.site.register(Producto, ProductoAdmin)

