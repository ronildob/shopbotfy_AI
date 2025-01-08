web: gunicorn a_aashopbot.wsgi --timeout 300
worker: celery -A a_aashopbot.celery worker --loglevel=info
beat: celery -A a_aashopbot.celery beat --loglevel=info
        



