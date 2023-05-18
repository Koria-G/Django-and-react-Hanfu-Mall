import React, { useState ,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {message,Card} from 'antd'

import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'

import './index.scss'
import http from '@/services/http.js'
import {getToken} from '@/utils'
import pubsub from 'pubsub-js'
import { incrementQuantity,decrementQuantity,removeItem ,addToCart} from '../../store/modules/cartStore'
import { useNavigate } from 'react-router-dom'
import MyCart from '../../components/my-cart'

const index = () => {
  const navgate=useNavigate()     
    const goCheck=()=>{
      navgate('/payment')
    }

  // console.log(count)
  return (
    <>
      <MyHeader/>
      <div className='container cartd'>
        <MyCart className="cartPage"/>
        <Card title="购物小技巧" bordered={true} className="showH" hoverable>
        <p>1、商品均来自官方直销商，质量有保障</p>
        <p>2、汉服是一种文化交流，请珍惜爱惜</p>
        <p>3、购物不要贪多，请理性购物</p>
      </Card>
      </div>
      <div style={{position:'relative'}}><div className="paybox" onClick={()=>goCheck()}>结算</div></div>
      <div className='bottom'>
      <MyFooter />
    </div>
    </>
    
  )
}

export default index
