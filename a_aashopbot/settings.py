from pathlib import Path
import os
import django_heroku
from urllib.parse import urlparse
from celery.schedules import crontab
import cloudinary
from ssl import CERT_NONE, CERT_REQUIRED, CERT_OPTIONAL
from django.contrib.messages import constants as message_constants

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = 'django-insecure-5%$cxs4ry1)4t05*_x2#f7m1^z=5_ugq%r-g%@6x5p+8t*lx1('

WSGI_APPLICATION = 'a_aashopbot.wsgi.application'

ROOT_URLCONF = 'a_aashopbot.urls'





DEBUG = True

ALLOWED_HOSTS = [
    "*",
]

X_FRAME_OPTIONS = "ALLOW-FROM 127.0.0.1"



INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'a_shop',
    "captcha",
    "shop_api",
    "shopbotfy",
    
    
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django_plotly_dash.middleware.BaseMiddleware",
    "django_plotly_dash.middleware.ExternalRedirectionMiddleware",
]
MESSAGE_STORAGE = 'django.contrib.messages.storage.session.SessionStorage'

MESSAGE_TAGS = {
    message_constants.DEBUG: 'debug',
    message_constants.INFO: 'info',
    message_constants.SUCCESS: 'success',
    message_constants.WARNING: 'warning',
    message_constants.ERROR: 'danger',
}



TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "a_shop.context_processors.global_context",
            ],
        },
    },
]




CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer",
    },
}

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }


# postgresql

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "d5f8qq19fgk749", 
        "USER": "u1bjq57eas61vq",
        "PASSWORD": "p17b970d0658f203f3210ee928b16d92003952d46a1153d4aa53efc1a3df3f319",
        "HOST": "c8lj070d5ubs83.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com",
        "PORT": "5432",
    }
}


# Use CERT_NONE se você não precisa de verificação de certificado
REDIS_URL = os.environ.get(
    "REDIS_URL",
    "rediss://:pa888306a11b560ff6103ba6bfadb7d53d335a291dcd02d3c916b46a63ccb2b3f@ec2-52-72-238-245.compute-1.amazonaws.com:28890"
    # "rediss://:pa888306a11b560ff6103ba6bfadb7d53d335a291dcd02d3c916b46a63ccb2b3f@ec2-18-206-109-119.compute-1.amazonaws.com:30650/0",
)
    

# Adicione o parâmetro ssl_cert_reqs aqui
if "rediss://" in REDIS_URL:
    # ou CERT_REQUIRED ou CERT_OPTIONAL conforme necessário
    REDIS_URL += "?ssl_cert_reqs=CERT_NONE"


CELERY_BROKER_URL = REDIS_URL
# Usando o mesmo Redis para resultados
CELERY_RESULT_BACKEND = CELERY_BROKER_URL

# Outras configurações Celery
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_TASK_SERIALIZER = "json"
CELERY_RESULT_SERIALIZER = "json"
CELERY_TIMEZONE = "America/Sao_Paulo"  # Defina o timezone conforme necessário

# CELERY_BEAT_SCHEDULE = {
#     "verificar-planos-a-cada-hora": {
#         "task": "a_shop.tasks.verificar_planos",
#         "schedule": crontab(minute=0, hour="*"),
#     },
# }

CELERY_BEAT_SCHEDULE = {
    "verificar-planos-a-cada-hora": {
        "task": "a_shop.tasks.verificar_planos",
        "schedule": crontab(minute=0, hour="*"),
    },

    "processar_fila_de_espera_periodicamente": {
        "task": "a_shop.tasks.processar_fila_de_espera",
        "schedule": crontab(minute="*/10"),  # A cada 10 minutos
    },

}
# crontab(hour=0, minute=0).
# A cada 5 minutos:   'schedule': crontab(minute='*/5')
# A cada 15 minutos: 'schedule': crontab(minute='*/15')
# A cada 30 minutos: 'schedule': crontab(minute='*/30')
# A cada hora:  'schedule': crontab(minute=0)  # Executa na primeira minuto de cada hora



# Configurações do Cloudinary
CLOUDINARY_URL = os.environ.get(
    "CLOUDINARY_URL",
    "cloudinary://165966347185665:sgluDn7I1x6IlksquX79b_4MguQ@hnrqudfke",
)
cloudinary.config(
    cloud_name="hnrqudfke",
    api_key="165966347185665",
    api_secret="sgluDn7I1x6IlksquX79b_4MguQ",
)
CLOUDINARY_STORAGE = {
    "CLOUD_NAME": "hnrqudfke",
    "API_KEY": "165966347185665",
    "API_SECRET": "sgluDn7I1x6IlksquX79b_4MguQ",
}






# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "pt-BR"

TIME_ZONE = "America/Sao_Paulo"

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"
STATIC_URL = "/static/"  # URL para os arquivos estáticos
STATIC_ROOT = os.path.join(
    BASE_DIR, "staticfiles"
)  # Diretório onde os arquivos estáticos são coletados no ambiente de produção
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static")
]  # Onde o Django procura arquivos estáticos durante o desenvolvimento



# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

django_heroku.settings(locals())
