# helpers.py
import json
from django.http import JsonResponse


task_status = {}


def handle_produz_request(username):
    from .views import produzir
    class Request:
        def __init__(self, username):
            self.method = "POST"
            self.body = json.dumps({"username": username})

    # Crie uma instância de Request
    request = Request(username)

    # Chame a função produz passando o request
    return produzir(request)
