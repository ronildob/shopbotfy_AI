# context_processors.py


from shopbotfy.models import ZZTextosMensagem


def global_context(request):
    # Retorna a primeira instância de TextosMensagem no contexto
    template = ZZTextosMensagem.objects.first()
    return {
        "template": template,
    }
