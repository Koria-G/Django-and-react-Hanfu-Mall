# alipay.py
from alipay import AliPay, AliPayConfig
from .settings import APP_PRIVATE_KEY, ALIPAY_PUBLIC_KEY, ALIPAY_APP_ID, RETURN_URL


def create_alipay():
    print(APP_PRIVATE_KEY, ALIPAY_PUBLIC_KEY, ALIPAY_APP_ID, RETURN_URL)
    alipay = AliPay(
        appid=ALIPAY_APP_ID,
        app_notify_url=None,  # 默认回调 url
        app_private_key_string=APP_PRIVATE_KEY,
        # 支付宝的公钥，验证支付宝回传消息使用，不是你自己的公钥,
        alipay_public_key_string=ALIPAY_PUBLIC_KEY,
        sign_type="RSA2",  # RSA 或者 RSA2
        debug=False,  # 默认 False
        verbose=False,  # 输出调试数据
        config=AliPayConfig(timeout=15)  # 可选，请求超时时间
    )
    return alipay


def alipay_pay(subject, total_amount, out_trade_no, return_url_view):
    alipay = create_alipay()
    return_url = RETURN_URL + return_url_view
    order_string = alipay.api_alipay_trade_page_pay(
        out_trade_no=out_trade_no,
        total_amount=total_amount,
        subject=subject,
        return_url=return_url,
        notify_url="https://example.com/notify"  # 可选，不填则使用默认 notify url
    )
    return order_string
