from django.shortcuts import render

# Create your views here.
# views.py
import random
import string
from django.http import HttpResponseRedirect
from django.shortcuts import render
from order.alipay import alipay_pay, create_alipay
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    if request.method == "GET":
        return render(request, 'index.html')
    elif request.method == "POST":
        # 随机生成32位商户交易号
        out_trade_no = "".join(random.sample(string.ascii_letters + string.digits, 32))

        order_string = alipay_pay(subject="测试商品", total_amount=100, out_trade_no=out_trade_no,return_url_view='alipay_return')
        return HttpResponseRedirect(settings.GATEWAY + order_string)


def alipay_return(request):
    processed_dict = {}
    # 回调时alipay会把一些公用信息通过GET方式传参回来，这里用字典去接收存储
    for key, value in request.GET.items():
        processed_dict[key] = value
    sign = processed_dict.pop("sign", None)

    new_alipay = create_alipay()
    verify_re = new_alipay.verify(processed_dict, sign)
    if verify_re is True:
        print("支付成功")
    else:
        print("支付失败")
