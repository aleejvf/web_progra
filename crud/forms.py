from django import forms
from .models import Producto,User
from django.contrib.auth.forms import UserCreationForm

class Productoform(forms.ModelForm):
    class Meta:
        model = Producto
        fields = '__all__'

class Usuarioform(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
     

##ACTUALIZA USUARIO
class UpdateUserForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['username','first_name','last_name','celular','email','direccion','postal']
