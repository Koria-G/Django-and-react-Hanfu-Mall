import os
from ggServer.settings import BASE_DIR
# settings.py

ALIPAY_APP_ID = "2021000122668440"
APP_PRIVATE_KEY = open(os.path.join(BASE_DIR, 'order/pay/app_private_key.pem'), 'r').read()
ALIPAY_PUBLIC_KEY = open(os.path.join(BASE_DIR, 'order/pay/alipay_public_key.pem'), 'r').read()
RETURN_URL = "http://127.0.0.1:5173/payment"
GATEWAY = "https://openapi.alipaydev.com/gateway.do?"
