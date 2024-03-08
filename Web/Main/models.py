from django.db import models

# Create your models here.
class SIGNIN(models.Model):
    Id=models.AutoField(primary_key=True)
    Password=models.CharField(max_length=200)
    Email=models.EmailField(max_length=200)

