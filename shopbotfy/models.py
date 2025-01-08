from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import cloudinary.uploader
import logging
from captcha.fields import CaptchaField

logger = logging.getLogger(__name__)


class Agencia(models.Model):
    PLANO_CHOICES = [
        ("teste", "Teste"),
        ("limite", "Limite"),
        ("ativo", "Ativo"),
        ("atraso1", "Atraso1"),
        ("atraso2", "Atraso2"),
        ("atraso3", "Atraso3"),
        ("atraso4", "Atraso4"),
        ("atraso5", "Atraso5"),
        ("atraso6", "Atraso6"),
        ("atraso7", "Atraso7"),
        ("atraso8", "Atraso8"),
        ("atraso9", "Atraso9"),
        ("atraso10", "Atraso10"),
        ("vencido", "Vencido"),
    ]

    agencia = models.CharField(max_length=300, unique=True)
    full_name = models.CharField(max_length=300, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    telefone = models.CharField(max_length=300, blank=True, null=True)
    username = models.CharField(max_length=300, default="Desconhecido")
    senha = models.CharField(max_length=300, default="Desconhecido")
    template_usado = models.CharField(max_length=100, unique=True, null=True)

    captcha = CaptchaField()

    tema_base = models.CharField(max_length=200, default="Dropmeta")
    link_impact = models.URLField(default="https://shopify.pxf.io/1raNLd")
    link_video = models.URLField(default="https://www.youtube.com/embed/ti-HQaPfM1Q")

    # CORES
    agencia_header_color = models.CharField(
        max_length=7, blank=True, null=True, default="#000000"
    )
    agencia_background_color = models.CharField(
        max_length=7, blank=True, null=True, default="#ffffff"
    )
    agencia_footer_color = models.CharField(
        max_length=7, blank=True, null=True, default="#000000"
    )
    agencia_footer_text_color = models.CharField(
        max_length=7, blank=True, null=True, default="#ffffff"
    )
    agencia_explica_color = models.CharField(
        max_length=7, blank=True, null=True, default="#000000"
    )

    # NAVEGADOR
    titulo_agencia = models.CharField(max_length=255, default="Título Padrão")

    # FOOTER
    copy_agencia = models.CharField(max_length=255, default="sua marca aqui")
    telefone_agencia = models.CharField(max_length=255, default="11999999999")
    contato_agencia = models.EmailField(max_length=255, default="contato@contato.com")
    link_site_agencia = models.URLField(default="https://www.yzie.com.br")
    link_face_agencia = models.URLField(default="https://www.facebook.com/")
    link_insta_agencia = models.URLField(default="https://www.instagram.com/")
    link_youtube_agencia = models.URLField(default="https://www.youtube.com/")
    

    link_generico_agencia = models.URLField(default="https://shopbotfy-generico.myshopify.com/")
    link_eletronicos_agencia = models.URLField(default="https://shopbotfy-eletronico.myshopify.com/")   
    link_casa_agencia = models.URLField(default="https://shopbotfy-casa-e-decoracao.myshopify.com/")
    link_moda_agencia = models.URLField(default="https://shopbotfy-moda.myshopify.com/")
    link_kids_agencia = models.URLField(default="https://shopbotfy-kids.myshopify.com/")
    link_pets_agencia = models.URLField(default="https://shopbotfy-pet.myshopify.com/")
    link_fitness_agencia = models.URLField(default="https://shopbotfy-fitness.myshopify.com/")
    link_saude_agencia = models.URLField(default="https://shopbotfy-saude-e-beleza.myshopify.com/")
    link_masculino_agencia = models.URLField(default="https://shopbotfy-masculino.myshopify.com/")
    link_feminino_agencia = models.URLField(default="https://shopbotfy-feminino.myshopify.com/")
    link_oculos_agencia = models.URLField(default="http://gl-solucoes-oculos.myshopify.com/")
    link_relogio_agencia = models.URLField(default="http://gl-solucoes-relogios.myshopify.com/")
    link_joias_agencia = models.URLField(default="http://gl-solucoes-relogios.myshopify.com/")
    # nichos
    show_nicho_generico_agencia = models.BooleanField(default=True)
    show_nicho_eletronicos_agencia = models.BooleanField(default=True)
    show_nicho_casa_agencia = models.BooleanField(default=True)
    show_nicho_moda_agencia = models.BooleanField(default=True)
    show_nicho_kids_agencia = models.BooleanField(default=True)
    show_nicho_pets_agencia = models.BooleanField(default=True)
    show_nicho_fitness_agencia = models.BooleanField(default=True)
    show_nicho_saude_agencia = models.BooleanField(default=True)
    show_nicho_masculino_agencia = models.BooleanField(default=True)
    show_nicho_feminino_agencia = models.BooleanField(default=True)
    show_nicho_oculos_agencia = models.BooleanField(default=True)
    show_nicho_relogio_agencia = models.BooleanField(default=True)
    show_nicho_joias_agencia = models.BooleanField(default=True)


    # paises
    show_pais_argentina_agencia = models.BooleanField(default=True)
    show_pais_brasil_agencia = models.BooleanField(default=True)
    show_pais_bolivia_agencia = models.BooleanField(default=True)
    show_pais_chile_agencia = models.BooleanField(default=True)
    show_pais_colombia_agencia = models.BooleanField(default=True)
    show_pais_paraguai_agencia = models.BooleanField(default=True)
    show_pais_peru_agencia = models.BooleanField(default=True)
    show_pais_uruguai_agencia = models.BooleanField(default=True)
    show_pais_venezuela_agencia = models.BooleanField(default=True)
    show_pais_equador_agencia = models.BooleanField(default=True)
    show_pais_espanha_agencia = models.BooleanField(default=True)
    show_pais_eua_agencia = models.BooleanField(default=True)
    show_pais_portugal_agencia = models.BooleanField(default=True)

    #links do rodapé
    show_telefone_agencia = models.BooleanField(default=True)
    show_contato_agencia = models.BooleanField(default=True)
    show_link_site_agencia = models.BooleanField(default=True)
    show_link_face_agencia = models.BooleanField(default=True)
    show_link_insta_agencia = models.BooleanField(default=True)
    show_link_youtube_agencia = models.BooleanField(default=True)
  

    
    
    


    generico_agencia = models.ImageField(upload_to="uploaded_genericos/", blank=True, null=True)
    eletronicos_agencia = models.ImageField(upload_to="uploaded_eletronicoss/", blank=True, null=True)
    casa_agencia = models.ImageField(upload_to="uploaded_casas/", blank=True, null=True)
    moda_agencia = models.ImageField(upload_to="uploaded_modas/", blank=True, null=True)
    kids_agencia = models.ImageField(upload_to="uploaded_kidss/", blank=True, null=True)
    pets_agencia = models.ImageField(upload_to="uploaded_petss/", blank=True, null=True)
    fitness_agencia = models.ImageField(upload_to="uploaded_fitnesss/", blank=True, null=True)
    saude_agencia = models.ImageField(upload_to="uploaded_saudes/", blank=True, null=True)
    masculino_agencia = models.ImageField(upload_to="uploaded_masculinos/", blank=True, null=True)
    feminino_agencia = models.ImageField(upload_to="uploaded_femininos/", blank=True, null=True)
    oculos_agencia = models.ImageField(upload_to="uploaded_oculoss/", blank=True, null=True)
    relogio_agencia = models.ImageField(upload_to="uploaded_relogios/", blank=True, null=True)
    joias_agencia = models.ImageField(upload_to="uploaded_joiass/", blank=True, null=True)

    
    # CABEÇALHO
    agencia_bg_image = models.ImageField(upload_to="uploaded_images/", blank=True, null=True)
    favicon_agencia = models.ImageField(upload_to="uploaded_favicons/", blank=True, null=True)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)

    def save(self, *args, **kwargs):
        for field_name in ["agencia_bg_image", 
                           "favicon_agencia", 
                           "avatar", 
                           "generico_agencia", 
                           "eletronicos_agencia", 
                           "casa_agencia", 
                           "moda_agencia", 
                           "kids_agencia", 
                           "pets_agencia", 
                           "fitness_agencia", 
                           "saude_agencia", 
                           "masculino_agencia", 
                           "feminino_agencia", 
                           "oculos_agencia", 
                           "relogio_agencia", 
                           "joias_agencia"]:
            field = getattr(self, field_name, None)
            if (
                field
                and not field.name.startswith("http")
                and not field.name.startswith("static/")
            ):
                try:
                    upload_result = cloudinary.uploader.upload(field)
                    setattr(self, field_name, upload_result["secure_url"])
                except Exception as e:
                    print(f"Erro ao fazer upload de {field_name}: {e}")
        super().save(*args, **kwargs)

    
    
    agencia_bg_width = models.CharField(max_length=10, blank=True, null=True)
    agencia_bg_height = models.CharField(max_length=10, blank=True, null=True)
    position_bg_image = models.CharField(
        max_length=10,
        choices=[("center", "Center"), ("left", "Left"), ("right", "Right")],
        default="center",
    )
    
    show_texto_cabecalho_agencia = models.BooleanField(default=True)
    texto_cabecalho_agencia = models.TextField(blank=True, null=True, default="Onde a Automação Potencializa a Criatividade!")
    cabecalho_font_size = models.CharField(max_length=10, blank=True, null=True, default="16px")
    cabecalho_text_color = models.CharField(max_length=7, blank=True, null=True, default="#ffffff")
    position_texto = models.CharField(
        max_length=10,
        choices=[("center", "Center"), ("left", "Left"), ("right", "Right")],
        default="center",)

    # TEXTOS EXPLICATIVOS
    texto_apresentacao_agencia = models.TextField(
        blank=True,
        null=True,
        default="""Bem-vindo! Sua jornada começa aqui.
                                Primeiro crie seu cadastro na Shopify.
                                Clique no botão abaixo e você será redirecionado para a página da Shopify.""",
    )
    apresentacao_font_size = models.CharField(
        max_length=10, blank=True, null=True, default="32px"
    )

    # cor dos textos
    explicacao_text_color = models.CharField(
        max_length=7, blank=True, null=True, default="#ffffff"
    )

    explicacao1_font_size = models.CharField(
        max_length=10, blank=True, null=True, default="16px"
    )

    texto_explicacao2_agencia = models.TextField(
        blank=True,
        null=True,
        default="AGORA PRECISAMOS QUE NOS ENVIE OS DADOS DE ACESSO A SUA LOJA PARA QUE POSSAMOS FAZER TODAS AS EDIÇÕES:",
    )
    explicacao2_font_size = models.CharField(
        max_length=10, blank=True, null=True, default="16px"
    )

    texto_explicacao3_agencia = models.TextField(
        blank=True,
        null=True,
        default="Preencha o formulário com as informações corretas; esses detalhes serão usados em sua loja.",
    )
    explicacao3_font_size = models.CharField(
        max_length=10, blank=True, null=True, default="16px"
    )

    texto_explicacao4_agencia = models.TextField(
        blank=True,
        null=True,
        default="Clique na imagem para ver a loja de apresentação referente ao Nicho. SENHA 1234",
    )
    explicacao4_font_size = models.CharField(
        max_length=10, blank=True, null=True, default="16px"
    )

    texto_explicacao5_agencia = models.TextField(
        blank=True,
        null=True,
        default="Agora escolha a cor da sua loja. Selecione a paleta de cores desejada e clique em confirmar.",
    )
    explicacao5_font_size = models.CharField(
        max_length=10, blank=True, null=True, default="16px"
    )

    custos = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.0
    )  # Custos financeiros
    faturamento = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.0
    )  # Faturamento financeiro
    plano = models.CharField(max_length=20, choices=PLANO_CHOICES, default="Teste")
    data_renovacao = models.DateTimeField(
        null=True, blank=True
    )  # Novo campo para data de renovação
    data_criacao = models.DateTimeField(default=timezone.now)

    def calcular_lucro(self):
        return self.faturamento - self.custos

    def __str__(self):
        return self.agencia


class PerfilUsuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    agencia = models.ForeignKey(
        Agencia, on_delete=models.SET_NULL, null=True, blank=True
    )
    full_name = models.CharField(max_length=255)  # Adicione este campo

    def __str__(self):
        return f"{self.user.username} - {self.agencia}"


class OuvidoriaMensagem(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    telefone = models.CharField(max_length=15, blank=True, null=True)
    mensagem = models.TextField()
    data_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.nome} - {self.email}'

class Notificacao(models.Model):
    agencia = models.ForeignKey(Agencia, on_delete=models.CASCADE)
    mensagem = models.TextField()
    lida = models.BooleanField(default=False)
    data_criacao = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Notificação para {self.agencia.agencia} - {self.mensagem[:50]}"

class ZZTextosMensagem(models.Model):
    link_1 = models.URLField(default="https://www.youtube.com/embed/q88BkInNCkE")
    link_2 = models.URLField(default="https://www.youtube.com/embed/cXmo6eHTyZs")
    link_3 = models.URLField(default="https://www.youtube.com/embed/1s8yYTTxIIs")
    link_4 = models.URLField(default="https://www.youtube.com/embed/_GeEhTc_9ik")
    link_5 = models.URLField(default="https://www.youtube.com/embed/PLr5HiZU6EQ")
    link_6 = models.URLField(default="https://www.youtube.com/embed/qxkoYWuVwKI")
    link_7 = models.URLField(default="https://shopify.pxf.io/rQmEZj")
    link_8 = models.URLField(default="https://www.yzie.com.br")
    show_link_8 = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade

    copy = models.CharField(max_length=255, default="sua marca aqui")

    telefone = models.CharField(max_length=255, default="11999999999")
    show_telefone = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade

    contato = models.EmailField(max_length=255, default="contato@contato.com")
    show_contato = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade

    link_site = models.URLField(default="https://www.yzie.com.br/")
    show_link_site = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade

    link_login = models.URLField(default="https://www.yzie.com.br/")

    # Campos de redes sociais
    link_face = models.URLField(default="https://www.facebook.com/")
    show_link_face = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade
    link_insta = models.URLField(default="https://www.instagram.com/")
    show_link_insta = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade
    link_youtube = models.URLField(default="https://www.youtube.com/")
    show_link_youtube = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade
    link_x = models.URLField(default="https://x.com//")
    show_link_x = models.BooleanField(
        default=True
    )  # Novo campo booleano para controle de visibilidade

    bg_image = models.ImageField(upload_to="uploaded_images/", blank=True, null=True)
    bg_width = models.CharField(max_length=10, blank=True, null=True)
    bg_height = models.CharField(max_length=10, blank=True, null=True)

    text_color = models.CharField(max_length=7, blank=True, null=True)
    header_color = models.CharField(max_length=7, blank=True, null=True)
    footer_color = models.CharField(max_length=7, blank=True, null=True)

    bg_position = models.CharField(
        max_length=10,
        choices=[("center", "Center"), ("left", "Left"), ("right", "Right")],
        default="center",
    )
    text_position = models.CharField(
        max_length=10,
        choices=[("center", "Center"), ("flex-start", "Left"), ("flex-end", "Right")],
        default="center",
    )
    text_content = models.TextField(blank=True, null=True)
    font_size = models.CharField(max_length=10, blank=True, null=True)

    main_title_top = models.CharField(max_length=50, default="0")
    main_title_left = models.CharField(max_length=50, default="0")
    title_top = models.CharField(max_length=50, default="50%")
    title_left = models.CharField(max_length=50, default="50%")

    titulo = models.CharField(max_length=255, default="Título Padrão")
    favicon = models.ImageField(upload_to="uploaded_favicons/", blank=True, null=True)

    background_color = models.CharField(max_length=7, blank=True, null=True)
    text_header_color = models.CharField(max_length=7, blank=True, null=True)
    text_saudacao_color = models.CharField(max_length=7, blank=True, null=True)
    text_header_content = models.TextField(blank=True, null=True)
    text_saudacao_content = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.contato


