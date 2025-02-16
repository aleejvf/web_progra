from django import forms
from .models import User
from .enumeraciones import *
from django.contrib.auth.forms import UserCreationForm
from .models import Producto,User



##FILTRO PRODUCTOS
class FiltroProductoForm(forms.Form):
    rangos_precios = forms.MultipleChoiceField(
        choices=PRICE_RANGES,
        widget=forms.CheckboxSelectMultiple,
        required=False
    )


class Productoform(forms.ModelForm):
    class Meta:
        model = Producto
        fields = '__all__'

class Usuarioform(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
     


##CREA USUARIOS
class UserForm(UserCreationForm):

    class Meta:
        model=User
        fields=['username','rut','first_name','last_name','celular','email','direccion','postal','password1','password2']

##ACTUALIZA USUARIO
class UpdateUserForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['username','first_name','last_name','celular','email','direccion','postal']

##OLVIDO CONTRASEÑA
class UsernameEmailForm(forms.Form):
    username = forms.CharField(label='Nombre de Usuario', max_length=150)
    email = forms.EmailField(label='Correo Electrónico', max_length=254)
    new_password = forms.CharField(label='Nueva Contraseña', widget=forms.PasswordInput)
