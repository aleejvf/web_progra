
from django.urls import path
from .views import adm_agregar_prod,adm_agregar_user,adm_index,adm_modificar_prod,eliminar_producto,adm_modificar_user,eliminar_user,adm_productos,adm_regist_compras,adm_regist_users,base_admin,base_user,base_index,index,adm_detalle_registro
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
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