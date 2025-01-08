from django.contrib import admin
from .models import AAFormuUserer, Pendencia, FilaDeEspera

# Registra apenas Pendencia com admin.site.register
admin.site.register(Pendencia)
admin.site.register(FilaDeEspera)


# Customização do Admin para exibir e filtrar dados
@admin.register(AAFormuUserer)
class AAFormuUsererAdmin(admin.ModelAdmin):
    # Exibe os campos principais na tabela do Admin
    list_display = (
        "agencia",
        "nome",
        "email",
        "status",
        "data_criacao_formatada",
        "data_atualizacao_formatada",
    )

    # Permite filtrar registros por campos específicos
    # Filtros por agência e status do usuário
    list_filter = ("agencia", "status")

    # Permite realizar buscas por texto nos campos definidos
    search_fields = ("nome", "username", "email")

    # Ordenação padrão dos registros no Admin
    ordering = ("agencia", "nome")  # Ordena por agência e nome

    # Formatação personalizada de datas (se necessário)
    def data_criacao_formatada(self, obj):
        return obj.data_criacao.strftime("%d/%m/%Y %H:%M") if obj.data_criacao else "-"

    data_criacao_formatada.short_description = "Data de Criação"

    def data_atualizacao_formatada(self, obj):
        return (
            obj.data_atualizacao.strftime("%d/%m/%Y %H:%M")
            if obj.data_atualizacao
            else "-"
        )

    data_atualizacao_formatada.short_description = "Última Atualização"
