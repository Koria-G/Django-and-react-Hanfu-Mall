import React, { useState ,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {message} from 'antd'

import '@/pages/Cart/index.scss'
import http from '@/services/http.js'
import {getToken} from '@/utils'
import { incrementQuantity,decrementQuantity,removeItem ,addToCart} from '../store/modules/cartStore'
import axios from 'axios'


const MyCart = () => {
  const cart=useSelector((state)=>state.cart)
  console.log('cart',cart)
  
  const dispatch=useDispatch()
    const [data,setData]=useState([])
    
    useEffect( ()=>{
      async function fetchData() {
        const result = await http.get(`/shopList`);
        setData(result.data);
        // setIsLoading(true)
      }
      fetchData()
      },[])
      const dataId=data.filter((item)=>{return item.user.uname==getToken()})
      console.log(dataId)
      const del=(id)=>{
        console.log("id",id)
        axios.delete(`cartAll/${id}/`).then(res=>message.success(res.statusText))
      }
      
     
    // 计算总价,数据库里面的
    var tatal=()=> {//计算总价
      //计算商品的总价:单价*数量再相加
      let sum = 0;
      //计算总价
      dataId.forEach( item => {
        //单价*数量再相加
      sum += item.goods.price*item.nums
      });
      return sum.toFixed(1)
    }
    var total=()=> {//计算总价
      //计算商品的总价:单价*数量再相加
      let sum = 0;
      //计算总价
      cart.forEach( item => {
        //单价*数量再相加
      sum += item.price*item.quantity
      });
      return sum;
    }
    console.log(tatal()+total())
    // 计算商品个数
    var num1=()=>{
      let num=0;
      dataId.forEach(item=>{
        num+=item.nums
      });
      return num;
    }
    var num2=()=>{
      let num=0;
      cart.forEach(item=>{
        num+=item.quantity
      });
      return num;
    }
    console.log(num1()+num2())
      

  // console.log(count)
  return (
    <>
      <div > 
        <div className="cart-wrapper ">
          <div className="top">
            <div className="sel-box">
              <input type="checkbox" checked/>
              <i>全选</i>
            </div>

            <span className="imgname-box">商品名称</span>
            <span>单价</span>
            <span className="count-box">数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>

          <div className="middle">
            <ul>
              {
                dataId?.map((item)=>{
                  return(
                    <li className="item" key={item.id}>
                <div className="sel-box">
                  <input type="checkbox" checked />
                </div>

                <div className="imgname-box">
                  <img src={item.goods.img} alt="item" />
                  <span>
                    {item.goods.gname}
                  </span>
                </div>

                <div className="price-box">
                  ￥<span className="price">{item.goods.price}</span>
                </div>

                <div className="count-box">
                  <button >-</button>
                  <span>{item.nums}</span>
                  <button>+</button>
                </div>

                <div className="amount-box">
                  <span className="price">{item.goods.price*item.nums}</span>
                </div>
                <div className="action-box">
                  <a href="#" onClick={()=>del(item.id)}>移除商品</a>
                </div>
              </li>
                  )
                })
              }
              {
                cart?.map((item)=>{
                  return(
                    <li className="item" key={item.id}>
                <div className="sel-box">
                  <input type="checkbox" checked/>
                </div>

                <div className="imgname-box">
                  <img src={item.url} alt="item" />
                  <span>
                    {item.name}
                  </span>
                </div>

                <div className="price-box">
                  ￥<span className="price">{item.price}</span>
                </div>

                <div className="count-box">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>

                <div className="amount-box">
                  <span className="price">{item.price*item.quantity}</span>
                </div>
                <div className="action-box">
                  <a href="#" onClick={() => dispatch(removeItem(item.id))}>移除商品</a>
                </div>
              </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="bottom">
            <div className="left"></div>
            <div className="count-box">
              已选商品 <span className="price">{num1()+num2()}</span> 件
            </div>
            <div className="amount-box">
              总计 <span className="price">{tatal()+total()}</span>
            </div>
            
          </div>
        </div>
      </div>
     
      
    </>
    
  )
}

export default MyCart
