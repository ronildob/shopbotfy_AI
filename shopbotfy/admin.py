from django.contrib import admin
from .models import Agencia
from .models import ZZTextosMensagem
from .models import OuvidoriaMensagem
from .models import Notificacao


admin.site.register(Agencia)
admin.site.register(OuvidoriaMensagem)
admin.site.register(ZZTextosMensagem)
admin.site.register(Notificacao)
