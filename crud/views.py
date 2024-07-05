from django.shortcuts import render, redirect, get_object_or_404
from .models import Producto,User,Registro,RegistroItem
from .forms import Productoform,UpdateUserForm
from django.contrib import messages
from django.urls import reverse
from django.contrib.auth import update_session_auth_hash

# Create your views here.
def adm_agregar_prod(request):
    data ={
        'form': Productoform()
    }
    if request.method == 'POST':
        formulario = Productoform(data=request.POST, files= request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request,"Se a agregado correctamente")
        else:
            data["form"] = formulario
    return render(request,'crud/adm_agregar_prod.html',data)


    

def eliminar_user(request, id):
    usuario = get_object_or_404(User, id=id)
    usuario.delete()
    messages.success(request,"eliminado correctamente")
    return redirect(to="adm_regist_users")

def adm_modificar_prod(request, id):
    producto = get_object_or_404(Producto, id=id)
    data = {
        'form': Productoform(instance=producto)
    }
    if request.method == 'POST':
        formulario = Productoform(data=request.POST, instance=producto, files= request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request,"modificado correctamente")
            return redirect(to="adm_productos")

        data["form"] = formulario
    return render(request, 'crud/adm_modificar_prod.html', data)
    
def eliminar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    producto.delete()
    messages.success(request,"eliminado correctamente")
    return redirect(to="adm_productos")
    

def adm_index(request):
    return render(request,'crud/adm_index.html')

def adm_productos(request):
    productos = Producto.objects.all()
    data = {
        'productos' : productos
    }
    return render(request,'crud/adm_productos.html',data)


def adm_regist_users(request):
    usuario = User.objects.all()
    data = {
        'usuario' : usuario
    }
    
    return render(request,'crud/adm_regist_users.html',data)

def base_admin(request):
    return render(request,'crud/base_admin.html')

def base_user(request):
    return render(request,'crud/base_user.html')

def base_index(request):
    return render(request,'crud/base_index.html')

def index(request):
    return render(request,'crud/index.html')


def adm_agregar_user(request):
    if request.method == 'POST':
        # Obtenemos los datos del formulario
        nombre_usuario = request.POST.get('nombre_usuario')
        rut = request.POST.get('rut')
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('lastName')
        email = request.POST.get('email')
        celular = request.POST.get('idcelular')
        direccion = request.POST.get('address')
        codigo_postal = request.POST.get('zip')
        contraseña1 = request.POST.get('contraseña1')
        contraseña2 = request.POST.get('contraseña2')

        # Validar que las contraseñas coincidan
        if contraseña1 != contraseña2:
            return render(request, 'adm_agregar_user.html', {'error_message': 'Las contraseñas no coinciden.'})

        # Creamos un nuevo objeto Usuario con los datos del formulario
        nuevo_usuario = User(
            username=nombre_usuario,
            rut=rut,
            first_name=nombre,
            last_name=apellido,
            email=email,
            celular=celular,
            direccion=direccion,
            postal=codigo_postal,
        )

        nuevo_usuario.set_password(contraseña1)

        # Guardamos el objeto en la base de datos
        nuevo_usuario.save()

        # Redirigimos a una página de éxito o cualquier otra acción que desees realizar después de guardar
        return redirect(to='adm_regist_users')

    else:
        # Si no es una solicitud POST, simplemente renderizamos el formulario vacío
        return render(request, 'crud/adm_agregar_user.html')


#######################MUESTRA LAS COMPRAS DEL USUARIO#########################
def adm_regist_compras(request):
    registros = Registro.objects.all().order_by('-fecha_compra')
    context = {
        'registros': registros
    }
    return render(request, 'crud/adm_regist_compras.html', context)
###############################################################################

#######################MUESTRA EL DETALLE DE LAS COMPRAS#######################
def adm_detalle_registro(request, id):
    registro = get_object_or_404(Registro, id=id)
    items = RegistroItem.objects.filter(compra=registro)
    context = {
        'registro': registro,
        'items': items
    }
    return render(request, 'crud/adm_detalle_registro.html', context)
###############################################################################
def adm_modificar_user(request,id):
    persona=get_object_or_404(User,id=id)
    form=UpdateUserForm(instance=persona)

    if request.method=="POST":
        form=UpdateUserForm(data=request.POST,files=request.FILES,instance=persona)
        if form.is_valid():
            usuario_modificado = form.save(commit=False)
            # Si se ha proporcionado una nueva contraseña, actualiza la contraseña del usuario
            nueva_contraseña = form.cleaned_data.get('password')
            if nueva_contraseña:
                usuario_modificado.set_password(nueva_contraseña)
                 # Actualiza la sesión del usuario para mantenerlo conectado(por la contraseña Django
                 # cierra automaticamente cuando se actualiza contraseña)
                update_session_auth_hash(request, usuario_modificado) 
            usuario_modificado.save()
            messages.success(request,"modificado correctamente")
            return redirect(to='adm_regist_users')

    datos={
        "form":form,
        "persona":persona
    }
    return render(request,'crud/adm_modificar_user.html',datos)