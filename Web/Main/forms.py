from django import forms

class SSignin(forms.Form):
    Email=forms.CharField(widget=forms.EmailInput(attrs={'placeholder':'Email','class':'login__content'}),required=True)
    Password=forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Password','class':'login__content'}),required=True,max_length=200)

