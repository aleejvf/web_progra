from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import AbstractUser


# MODELO USUARIO
class User(AbstractUser):
    rut=models.CharField(max_length=10, null=True)
    direccion=models.CharField(max_length=500, null=True)
    celular=models.IntegerField(default=0, validators=[MinValueValidator(0),MaxValueValidator(999999999)], null=False)
    postal=models.IntegerField(default=0, validators=[MinValueValidator(0),MaxValueValidator(9999999)], null=False)


class Producto(models.Model):
    ANILLO = 'Anillo'
    ARO = 'Aro'
    COLLAR = 'Collar'
    TIPO_CHOICES = [
        (ANILLO, 'Anillo'),
        (ARO, 'Aro'),
        (COLLAR, 'Collar'),
    ]

    GRANDE = 'Grande'
    MEDIANO = 'Mediano'
    PEQUEÑO = 'Pequeño'
    TAMAÑO_CHOICES = [
        (GRANDE, 'Grande'),
        (MEDIANO, 'Mediano'),
        (PEQUEÑO, 'Pequeño'),
    ]
    nombre=models.CharField(max_length=50, null=False)
    descripcion = models.TextField()
    foto = models.ImageField(upload_to='productos',null=True)
    precio=models.IntegerField(default=0, validators=[MinValueValidator(0)])
    cantidad_disponible = models.IntegerField(default=0, validators=[MinValueValidator(0)])    
    categoria = models.CharField(max_length=6, choices=TIPO_CHOICES)
    tamaño = models.CharField(max_length=7, choices=TAMAÑO_CHOICES)

    def __str__ (self):
        return f"{self.id} -  {self.nombre} {self.descripcion}"

class Registro(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    productos = models.ManyToManyField('Producto', through='RegistroItem')
    rut = models.CharField(max_length=10, null=True)
    nombre = models.CharField(max_length=100, null=True, blank=True)
    apellido = models.CharField(max_length=100, null=True, blank=True)
    direccion = models.CharField(max_length=255, null=True, blank=True)
    celular = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    total = models.IntegerField(default=0,null=False)
    fecha_compra = models.DateTimeField(auto_now_add=True)

# MODELO DEL DETALLE DEL REGISTRO
class RegistroItem(models.Model):
    compra = models.ForeignKey(Registro, on_delete=models.CASCADE, null=True)
    producto = models.ForeignKey('Producto', on_delete=models.SET_NULL, null=True)
    nombre_producto = models.CharField(max_length=255, null=False)
    cantidad = models.PositiveIntegerField(null=False)
    precio_producto = models.IntegerField(default=0,null=False)
    subtotal = models.IntegerField(default=0,null=False)

    def save(self, *args, **kwargs):
        if not self.pk:  # Si es una nueva instancia
            self.nombre_producto = self.producto.nombre
            self.precio_producto = self.producto.precio
        self.subtotal = self.cantidad * self.precio_producto
        super().save(*args, **kwargs)