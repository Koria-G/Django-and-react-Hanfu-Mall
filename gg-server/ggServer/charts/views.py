from jinja2 import Environment, FileSystemLoader
from pyecharts.globals import CurrentConfig
from django.conf import settings
 
CurrentConfig.GLOBAL_ENV = Environment(loader=FileSystemLoader("{}/templates".format(settings.BASE_DIR)))
 
from django.http import HttpResponse
from pyecharts import options as opts
from pyecharts.charts import Bar,Page,Pie,Bar3D,WordCloud
from pyecharts.globals import ThemeType,SymbolType
from mall.models import Goods
from cart.models import ShoppingCart
from comm.models import Comm

from random import randint
# # Create your views here.

def goods_charts(request):
    woman=Goods.objects.filter(category_id='5')
    man=Goods.objects.filter(category_id='6')
    child=Goods.objects.filter(category_id='7')
    near=Goods.objects.filter(category_id='8')

    goods_type=["汉服男装","汉服女装","汉服童装","周边配饰"]
    type_data=[woman.count(),man.count(),child.count(),near.count()]

     # 创建饼图
    pip=(
    Pie(init_opts=opts.InitOpts(theme=ThemeType.DARK))
            # 为饼图增加标签和数据
      .add("", [list(z) for z in zip(goods_type, type_data)],)
            # 为饼图增加主标题和副标题
      .set_global_opts(title_opts=opts.TitleOpts(title="汉服商城分类", subtitle="种类: (个)"))
            # 为饼图增加数据标签
      .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}\n({d}%)"))
    )
    return HttpResponse(pip.render_embed())

 
def cart_chart(request):
    time=list(ShoppingCart.objects.values_list('add_time',flat=True))
#     print(time)
    nums=list(ShoppingCart.objects.values_list('nums',flat=True))
    c = (
        # 设置主题的样式
        Bar(init_opts=opts.InitOpts(theme=ThemeType.CHALK))
        .add_xaxis(time)
        .add_yaxis("购物车数量",nums)
        
        # 增加主题和副标题
        .set_global_opts(title_opts=opts.TitleOpts(title="Bar-购物车情况"),
                         toolbox_opts=opts.ToolboxOpts(),
                         yaxis_opts=opts.AxisOpts(name='数量'),
                         xaxis_opts=opts.AxisOpts(name='时间',axislabel_opts={"interval":"0"}),
                         )
    )
    
    return HttpResponse(c.render_embed())

def user_chart(request):
    user_id=list(ShoppingCart.objects.values_list('user_id',flat=True))
    goods_id=list(ShoppingCart.objects.values_list('goods_id',flat=True))
    nums=list(ShoppingCart.objects.values_list('nums',flat=True))
    # print("xianshi",user_id,goods_id,nums)
    data1=[]
    for i in range(len(user_id)):
        data=[i,i,nums[i]]
        data1.append(data)
        print(data)
    print("data",data1)
    data2=[[d[1], d[0], d[2]] for d in data1]
    c = (
        # 设置主题的样式
        Bar3D(init_opts=opts.InitOpts(theme=ThemeType.WHITE))
        # .add_xaxis(id)
        # .add_yaxis("购物车数量",nums)
        .add(
           series_name="",
            data=data2,
            xaxis3d_opts=opts.Axis3DOpts(type_="category", data=user_id,name='购买用户编号'),
            yaxis3d_opts=opts.Axis3DOpts(type_="category", data=goods_id,name='购买商品编号'),
            zaxis3d_opts=opts.Axis3DOpts(type_="value",name='购物车数量'),
            
           
        )
        .set_global_opts(
            visualmap_opts=opts.VisualMapOpts(
                max_=10
            ),
            title_opts=opts.TitleOpts(title="用户商品数量-购物车情况"),
            

        )
    )
    
    return HttpResponse(c.render_embed())

def comm_chart(request):
    words=list(Comm.objects.values_list('content',flat=True))
    # print("word",words)

    word=''
    for i in words:
        word+=i
    # print("wordddd",word)
    result={}
    for value in word:
        result[value]=word.count(value)
    # print("result",result)
    cloud=list(zip(result.keys(),result.values()))
    # print("cloud",cloud)
    # 创建慈云图
    wordcloud=(
        WordCloud(init_opts=opts.InitOpts(theme=ThemeType.VINTAGE))
        .add("", cloud, word_size_range=[10, 50], shape=SymbolType.RECT)
        .set_global_opts(title_opts=opts.TitleOpts(title="汉服交流话题词云图",subtitle='汉服'))
    )
    return HttpResponse(wordcloud.render_embed())