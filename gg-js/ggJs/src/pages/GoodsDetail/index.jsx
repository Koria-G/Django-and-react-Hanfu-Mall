import React, { useState,useEffect } from 'react'
import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import { Link, useParams } from 'react-router-dom'
import http from '@/services/http.js'
import { Col, Divider, Row,Button, FloatButton,message } from 'antd';
import { ShoppingCartOutlined ,PayCircleOutlined } from '@ant-design/icons';
import './index.scss'
import pubsub from 'pubsub-js'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../../store/modules/cartStore'
import cookie from 'react-cookies'
import {getId} from '../../utils'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'

export default function index() {
  // const url=cookie.load('goods1')
  const [data,setData]=useState([])
  const [detail,setDetail]=useState([])
  const [stock,setStock]=useState([])

  const cart=useSelector((state)=>state.cart)
  const [select,setSelect]=useState(-1)
  const dispatch=useDispatch()
  // 传值的参数
  // const [message,setMessage]=useState([])

  // 获取当前页面的商品id
  const id=getId()
  console.log("id",id)
  const params=useParams()
  console.log(params)
  const addCart=()=>{
    console.log("cart11")
    const time=dayjs().format('YYYY-MM-DD HH:mm:ss');
    console.log(time)
    const value={
      nums:'1',
      add_time:time,
      user:getId(),
      goods:params.id

    };
    console.log(value,"value")
    axios.post('cartAll/',value).then(res=>message.success(res.statusText))
  }
  // 发送axios请求，详情头信息
  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/mall`);
      setData(result.data);
      // setIsLoading(true)
    }
    fetchData()
    },[])
    const dataId=data.filter((item)=>{return item.id==params.id})
    console.log(dataId)
    // console.log({...dataId})

  // 发送axios请求，详情页表信息
  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/mallC`);
      setDetail(result.data);
      // setIsLoading(true)
    }
    fetchData()
    },[])
    // console.log(detail)
    const detailId=detail.filter((item)=>{return item.goods==params.id})
    // console.log(detailId)

    //发送axios，拿到颜色，尺码，价格等信息
    useEffect( ()=>{
      async function fetchData() {
        const result = await http.get(`/mallT`);
        setStock(result.data);
        // setIsLoading(true)
      }
      fetchData()
      },[])
      // console.log(detail)
      const stockId=stock.filter((item)=>{return item.goods.id==params.id})
      console.log(stockId)

      const chose=(id)=>{
        // console.log("chose id",id)
        // setMessage(stock.filter((item)=>{return item.id==id}))
        const mess=stock.filter((item)=>{return item.id==id})
        // console.log("mess",id,mess,mess[0].goods.id)
        setSelect(mess[0].id)
        console.log(mess[0].id)
        pubsub.publish('addCart',mess)
        dispatch(addToCart({
          id:mess[0].goods.id,url:mess[0].goods.img,price:mess[0].goods.price,name:mess[0].goods.gname
        }))
        // console.log("check",dispatch,addToCart,cart)
      }

        // 存储cookie
  const arr=[]
  for(let i=1;i<20;i++){
    if(cookie.load(`goods${i}`)!==''&&i!=params.id){
      arr.push(cookie.load(`goods${i}`))
    }
  }
  const arr1=arr.filter((item)=>{ return(item!==undefined)})
  return (
    <div>
      <MyHeader/>
      <div className='container'>  
        {dataId.map((item)=>{
          return(
            <div className='details-body' key={item.id}>
            <div className='imgBig' ><img src={item.img} alt=""/></div>
            <div className='body-content'>
              <div className='body-content-header'>
                        <h1>{item.gname}</h1>
                        <p><span className='price'>￥{item.price}</span><span className='oldprice'>￥{item.oldprice}</span></p>
              </div> 
              <div className='body-content-content'>
                <h3><Divider orientation="center">可选套餐组合</Divider></h3>
                <Row gutter={[16, 24]}>
                 
                    {
                      stockId.map((stock,index)=>{
                        return(
                          <Col span={6} key={stock.id} className={stock.id==select?'select':''}>
                            <div className="stock-content" onClick={()=>chose(stock.id)} >
                              <div className='stock-img'><img src={stock.color.colorurl} alt="找不到图片哦" /></div>
                              <div className='stock-body'>
                                <p><span>颜色</span>{stock.color.colorname}</p>
                                <p><span>尺寸</span>{stock.size.sname}</p>
                                <p><span>库存</span>{stock.count}</p>
                              </div>
                            </div>
                            <p className='stock-num'><span>套餐</span>{index+1}</p>
                          </Col>
                        )
                      })
                    }
                    
                  
                </Row>
              </div>
              <div className='checkout'>
              <Button type="primary" href='/payment' onClick={addCart} size='large' icon={<PayCircleOutlined />} className="paygoods">立即支付</Button>
              <Button type="primary" href='/cart' onClick={addCart} size='large' icon={<ShoppingCartOutlined />}>加入购物车</Button>
              </div> 
            </div>
            </div> 
          )
        })} 
        <div className='detail-body'>
          
          <div className='tuijian'>
            <h1>猜你喜欢</h1>
            {
              arr1.map((item,index)=>{
                return(
                  <>
                  <Link to={{pathname:`/detail/${index+1}`}} ><img src={item} alt=""/></Link>
                  </>
                )
              })
            }
          </div>
          <div className='details'>
          {
            detailId.map((detail)=>{
              return(
                <div >
                <h3><Divider orientation="left">{detail.gdname}</Divider></h3>
                <img src={detail.gdurl} alt="" />
                </div>
              )
            })
          }
          </div>
         
        </div>
      </div>
      < FloatButton.BackTop/>
      <div className='bottom'>
      <MyFooter />
    </div>
    </div>
  )
}
