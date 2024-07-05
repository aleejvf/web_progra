from django.urls import path
from .views import index,eliminar,cerrar_sesion,crearcuenta,carrito,catalogo,compra,modificar_usuario,olvido_contraseña,pagar,pagar_s,perfil,producto,confirma,ver_catalogo,adm_agregar_prod,adm_agregar_user,adm_index,adm_modificar_prod,eliminar_producto,adm_modificar_user,eliminar_user,adm_productos,adm_regist_compras,adm_regist_users,base_admin,base_user,base_index,index,adm_detalle_registro

from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [

    #USUARIO
    path('perfil/<id>',perfil, name='perfil'),
    path('crearcuenta/', crearcuenta, name='crearcuenta'),
    path('cerrar_sesion',cerrar_sesion, name='cerrar_sesion'),
    path('eliminar/<id>',eliminar, name='eliminar'),
    path('modificar_usuario/<id>',modificar_usuario, name='modificar_usuario'),
    path('olvido_contraseña/',olvido_contraseña, name='olvido_contraseña'),

    #CARRITO
    path('carrito/',carrito, name='carrito'),
    path('carrito/add/<product_id>',views.add_to_cart, name='add_to_cart'),
    path('carrito/remove/<product_id>',views.remove_from_cart, name='remove_from_cart'),
    path('carrito/aumentar/<int:item_id>/', views.aumentar_cantidad, name='aumentar_cantidad'),
    path('carrito/disminuir/<int:item_id>/', views.disminuir_cantidad, name='disminuir_cantidad'),

    #REGISTRO
    path('detalle/<int:id>/', views.detalle_registro, name='detalle_registro'),
    path('detallecompras/', views.detallecompras, name='detallecompras'),

    #CATALOGO
    path('catalogo/<id>',catalogo, name='catalogo'),
    path('ver_catalogo/',ver_catalogo, name='ver_catalogo'),

    #PRODUCTO
    path('producto/<id>',producto, name='producto'),

    #COMPRA
    path('compra',compra, name='compra'),
    path('pagar_s/',pagar_s, name='pagar_s'),
    path('pagar/<id>',pagar, name='pagar'),
    path('pagar_s/add_to_cart_and_redirect_anoni//<int:product_id>/',views.add_to_cart_and_redirect_anoni, name='add_to_cart_and_redirect_anoni'),
    path('pagar/add-to-cart-and-redirect//<int:product_id>/<int:id>/',views.add_to_cart_and_redirect, name='add_to_cart_and_redirect'),
    path('pagar/confirma/<id>',views.confirma, name='confirma'),

 


    path('',index,name='index'),
    path('adm_agregar_prod/',adm_agregar_prod, name='adm_agregar_prod'),
    path('adm_detalle_registro/<id>/',adm_detalle_registro, name='adm_detalle_registro'),
    path('adm_agregar_user/',adm_agregar_user, name='adm_agregar_user'),
    path('adm_modificar_prod/<id>/',adm_modificar_prod, name='adm_modificar_prod'),
    path('eliminar_producto/<id>/',eliminar_producto, name='eliminar_producto'),
    path('adm_modificar_user/<id>/',adm_modificar_user, name='adm_modificar_user'),
    path('eliminar_user/<id>/',eliminar_user, name='eliminar_user'),    
    path('adm_index/',adm_index, name='adm_index'),
    path('adm_productos/',adm_productos, name='adm_productos'),
    path('adm_regist_compras/',adm_regist_compras, name='adm_regist_compras'),
    path('adm_regist_users/',adm_regist_users, name='adm_regist_users'),
    path('base_admin/',base_admin, name='base_admin'),
    path('base_user/',base_user, name='base_user'),
    path('base_index/',base_index, name='base_index'),
]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
