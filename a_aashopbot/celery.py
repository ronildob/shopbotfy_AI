import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "a_aashopbot.settings")

app = Celery("a_aashopbot")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()



app.conf.beat_schedule = {
    "verificar_planos_status_diario": {
        "task": "a_shop.verificar_planos_status",
        "schedule": crontab(hour=0, minute=0),
    },
}







