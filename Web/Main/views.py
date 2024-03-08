from django.shortcuts import render
from .forms import SSignin
from .models import SIGNIN

# Create your views here.
def index(request):
    if request.method == "POST":
        forms = SSignin(request.POST)
        result = SIGNIN(Password=forms.data["Password"], Email=forms.data["Email"])
        result.save()
        return render(request=request, template_name="index.html", context={"forms": forms})



    else:
        forms = SSignin()
        return render(request=request, template_name="index.html", context={"forms": forms})
def Signin(request):
    if request.method == "POST":
        forms = SSignin(request.POST)
        result = SIGNIN(Password=forms.data["Password"], Email=forms.data["Email"])
        result.save()
        return render(request=request, template_name="index.html", context={"forms": forms})



    else:
        forms = SSignin()
        return render(request=request, template_name="index.html", context={"forms": forms})
