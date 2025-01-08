from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from shopbotfy.models import Agencia

class AAFormuUserer(models.Model):
    STATUS_CHOICES = [
        ("reservado", "Reservado"),
        ("respondido", "Respondido"),
        ("iniciado", "Iniciado"),
        ("pendencia", "Pendencia"),
        ("produzindo", "Produzindo"),
        ("finalizado", "Finalizado"),
        ("erro", "Erro"),
    ]
    section_id = models.AutoField(primary_key=True)
    agencia = models.ForeignKey(
        Agencia, on_delete=models.CASCADE, null=True, blank=True
    )
    nome = models.CharField(max_length=300, default="Desconhecido")
    username = models.CharField(max_length=300, default="Desconhecido")
    email = models.EmailField(max_length=254, null=False)
    senha = models.CharField(max_length=300, default="Desconhecido")

    pais = models.CharField(max_length=300, default="Brasil")
    cor = models.CharField(max_length=200, default="Desconhecido")
    nicho = models.CharField(max_length=200, default="Genérica")
    tema_base = models.CharField(max_length=200, default="Dropmeta")

    link_store = models.URLField(
        max_length=200, default="https://example.com/default-link"
    )
    url_loja = models.CharField(max_length=200, default="example.com/default-link")
    token_senha = models.CharField(max_length=200, default="Desconhecido")
    chave_de_api = models.CharField(max_length=200, default="Desconhecido")
    chave_secreta = models.CharField(max_length=200, default="Desconhecido")

    telefone = models.CharField(max_length=300, default="Desconhecido")
    email_suporte = models.EmailField(max_length=254, default="suporte@example.com")
    empresa = models.CharField(max_length=300, default="Desconhecido")
    business_hours = models.CharField(max_length=300, default="Desconhecido")

    produtos = models.BooleanField(default=False)
    resposta_produtos = models.TextField(null=True, blank=True)
    tema = models.BooleanField(default=False)
    resposta_tema = models.TextField(null=True, blank=True)
    banners = models.BooleanField(default=False)
    resposta_banners = models.TextField(null=True, blank=True)
    colecoes = models.BooleanField(default=False)
    resposta_colecoes = models.TextField(null=True, blank=True)
    paginas = models.BooleanField(default=False)
    resposta_paginas = models.TextField(null=True, blank=True)
    politicas = models.BooleanField(default=False)
    resposta_politicas = models.TextField(null=True, blank=True)
    prod_col = models.BooleanField(default=False)
    resposta_prod_col = models.TextField(null=True, blank=True)
    estilizacao = models.BooleanField(default=False)
    resposta_estilizacao = models.TextField(null=True, blank=True)
    lojaproduzida = models.BooleanField(default=False)

    # Novo campo de status
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="Reservado"
    )

    data_criacao = models.DateTimeField(default=timezone.now)
    data_atualizacao = models.DateTimeField(auto_now=True)

    def data_criacao_formatada(self):
        return self.data_criacao.astimezone(timezone.get_default_timezone()).strftime(
            "%d/%m %H:%M"
        )

    def data_atualizacao_formatada(self):
        return self.data_atualizacao.astimezone(
            timezone.get_default_timezone()
        ).strftime("%d/%m %H:%M")

    def __str__(self):
        return f"{self.agencia} - Loja {self.empresa} - Criado em {self.data_criacao_formatada()} - Atualizado {self.data_atualizacao_formatada()}"

    # Método para registrar mudanças de status
    def update_status(self, novo_status):
        if self.status != novo_status:
            agora = timezone.now()
            # Atualizar o histórico do status anterior
            historico_atual = self.historico_status.filter(
                status=self.status, data_fim__isnull=True
            ).first()
            if historico_atual:
                historico_atual.data_fim = agora
                historico_atual.save()

            # Criar novo registro no histórico
            StatusHistorico.objects.create(
                user=self, status=novo_status, data_inicio=agora
            )

            # Atualizar o status no modelo principal
            self.status = novo_status
            self.save()


class StatusHistorico(models.Model):
    user = models.ForeignKey(
        "AAFormuUserer", on_delete=models.CASCADE, related_name="historico_status"
    )
    status = models.CharField(max_length=20, choices=AAFormuUserer.STATUS_CHOICES)
    data_inicio = models.DateTimeField(default=timezone.now)
    data_fim = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user} - {self.status} de {self.data_inicio} a {self.data_fim or 'Em andamento'}"


class Pendencia(models.Model):
    section_id = models.AutoField(primary_key=True)
    agencia = models.ForeignKey(
        Agencia, on_delete=models.CASCADE, null=True, blank=True
    )
    username = models.CharField(max_length=300, default="Desconhecido")
    verificacoes = models.IntegerField(default=0)

    data_atualizacao = models.DateTimeField(auto_now=True)

    def data_atualizacao_formatada(self):
        return self.data_atualizacao.astimezone(
            timezone.get_default_timezone()
        ).strftime("%d/%m %H:%M")

    def __str__(self):
        return f"{self.agencia} - Atualizado {self.data_atualizacao_formatada()}"


class FilaDeEspera(models.Model):
    agencia = models.ForeignKey(Agencia, on_delete=models.CASCADE)
    dados_formulario = models.JSONField()  # Para armazenar os dados do formulário
    data_criacao = models.DateTimeField(default=timezone.now)
    processado = models.BooleanField(default=False)

    def __str__(self):
        return f"Fila para {self.agencia.template_usado} - Criado em {self.data_criacao}"


