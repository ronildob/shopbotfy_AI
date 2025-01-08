from django import forms
from captcha.fields import CaptchaField
from shopbotfy.models import Agencia

class CadastroAgenciaForm(forms.Form):
    agencia = forms.CharField(max_length=300)
    full_name = forms.CharField(max_length=300)
    email = forms.EmailField(max_length=254)
    telefone = forms.CharField(max_length=300, required=False)
    username = forms.CharField(max_length=300)
    password = forms.CharField(widget=forms.PasswordInput)
    
    # Adicionando o campo de captcha
    captcha = CaptchaField()

