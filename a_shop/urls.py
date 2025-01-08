from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from . import tasks



urlpatterns = [

    path("", views.home, name="home"),
    path("login/", views.login, name="login"),
    path("logout/", views.user_logout, name="logout"),

    ##################################################
    path("acesso1/", views.acesso1, name="acesso1"),
    path("acesso5/", views.acesso5, name="acesso5"),
    path("acesso10/", views.acesso10, name="acesso10"),
    path("acesso30/", views.acesso30, name="acesso30"),
    path("acesso50/", views.acesso50, name="acesso50"),
    path("acesso100/", views.acesso100, name="acesso100"),
    path("webhook/renovacao/", views.webhook_renovacao, name="webhook_renovacao"),
    path("pedidogl/", views.pedidogl, name="pedidogl"),

    ##################################################
    path("email/", views.email, name="email"),
    path("email_cadastro/", views.email_cadastro, name="email_cadastro"),
    path("mail/", views.mail, name="mail"),
    path("email_agencia/", views.email_agencia, name="email_agencia"),
    path('emailnotificacao/', views.emailnotificacao, name='emailnotificacao'),
    path('enviar-email/', views.email_selecao, name='email_selecao'),
    path("emailgl/", views.emailgl, name="emailgl"),
    

    ##################################################
    path("painel_agencia/", views.painel_agencia, name="painel_agencia"),
    path("painel_agencia/<int:notification_id>/", views.painel_agencia, name="painel_agencia_notification"),
    path("perfil/", views.atualizar_perfil, name="atualizar_perfil"),

    
    

    


    ###########################
    path("politica_privacidade/", views.politica_privacidade, name="politica_privacidade"),
    path("politica_site/", views.politica_site, name="politica_site"),
    path("termos_de_uso/", views.termos_de_uso, name="termos_de_uso"),
    path("ouvidoria/", views.ouvidoria, name="ouvidoria"),
    path("sobrenos/", views.sobrenos, name="sobrenos"),
    path('enviar-ouvidoria/', views.enviar_ouvidoria, name='enviar_ouvidoria'), 
    path('agradecimento/', views.agradecimento, name='agradecimento'),
    path('historia/', views.historia, name='historia'),
    


    ###########################
    path("formulario/", views.formulario, name="formulario"),
    path("formulario_gringo/", views.formulario_gringo, name="formulario_gringo"),
    path("retornaagencias/", views.retornaagencias, name="retornaagencias"),
    path("criaracessosadmin/", views.criaracessosadmin, name="criaracessosadmin"),


    ###########################
    path("administrador/", views.administrador, name="administrador"),
    path("cadastrar_agencia/", views.cadastrar_agencia, name="cadastrar_agencia"),
    path("notificacoes/", views.notificacoes, name="minhas_notificacoes"),
    path('marcar-como-lida/<int:notification_id>/', views.marcar_como_lida, name='marcar_como_lida'),
    path("cartoesadm/", views.cartoesadm, name="cartoesadm"),
    path("search_adm/", views.search_adm, name="search_adm"),


    ###########################
    path("agencia/<str:template_name>/", views.agencia_dinamica, name="agencia_dinamica"),
    ###########################

    path("teste/", views.teste, name="teste"),
    path("coresgenerica/<int:agencia_id>/", views.coresgenerica, name="coresgenerica"),
    path("coressaude/<int:agencia_id>/", views.coressaude, name="coressaude"),
    path("corescasa/<int:agencia_id>/", views.corescasa, name="corescasa"),
    path("coreseletronicos/<int:agencia_id>/", views.coreseletronicos, name="coreseletronicos"),
    path("coreskids/<int:agencia_id>/", views.coreskids, name="coreskids"),
    path("corespets/<int:agencia_id>/", views.corespets, name="corespets"),
    path("coresfitness/<int:agencia_id>/", views.coresfitness, name="coresfitness"),
    path("coresfeminino/<int:agencia_id>/", views.coresfeminino, name="coresfeminino"),
    path("coresmasculino/<int:agencia_id>/", views.coresmasculino, name="coresmasculino"),
    path("coresmoda/<int:agencia_id>/", views.coresmoda, name="coresmoda"),
    path("coresrelogios/<int:agencia_id>/", views.coresrelogios, name="coresrelogios"),
    path("coresoculos/<int:agencia_id>/", views.coresoculos, name="coresoculos"),
    path("paislatan/<int:agencia_id>/", views.paislatan, name="paislatan"),
    path('paisbras/<int:agencia_id>/', views.paisbras, name='paisbras'),
    path("paiseua/<int:agencia_id>/", views.paiseua, name="paiseua"),
    path("paisespan/<int:agencia_id>/", views.paisespan, name="paisespan"),
    path("paisport/<int:agencia_id>/", views.paisport, name="paisport"),
    path("agenciaestyle/<int:agencia_id>/", views.agenciaestyle, name="agenciaestyle"),
    
    ###########################
    path("produz/", views.produz, name="produz"),
    path("produzir/", views.produzir, name="produzir"),
    path("processar_usuario/", tasks.processar_usuario, name="processar_usuario"),
    path("cartoes/", views.CartoesView, name="cartoes"),  # Listar cartões
    path("cartoes/atualizar/", views.atualizar_cartoes, name="atualizar_cartoes"),  # Nova rota
    path("cartoes/detalhes/<int:section_id>/",views.DetalhesCartaoView,name="detalhes_cartao",),
    path("detalhes/<int:section_id>/", views.detalhes, name="detalhes"),
    path("finalizados/<int:section_id>/", views.finalizados, name="finalizados"),
    path("criarapp/", views.criarapp, name="criarapp"),
    path("edtema/", views.edtema, name="edtema"),
    path("acesapperro/<int:section_id>/", views.acesapperro, name="acesapperro"),  # Adicionando <int:section_id>
    path("remarcar/", views.remarcar, name="remarcar"),
    path("pendencias/<int:section_id>/", views.pendencias, name="pendencias"),
    path("acesapp/<int:section_id>/", views.acesapp, name="acesapp"),  # Adicionando <int:section_id>
    path("formularioerro/", views.formularioerro, name="formularioerro"),
    path("temaagencia/", views.temaagencia, name="temaagencia"),
    path("style_forms/", views.style_forms, name="style_forms"),
    path("list_cards/", views.list_cards, name="list_cards"),
    path("pagefinal/", views.pagefinal, name="pagefinal"),
    path("search_view/", views.search_view, name="search_view"),
    path("adic_cartoes/", views.adic_cartoes, name="adic_cartoes"),
    path("avatar/", views.avatar, name="avatar"),

    ###########################

    ###########################
    path("testar/", views.testar, name="testar"),
    

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


