
import React, { useState ,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {message,Card,Divider} from 'antd'

import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import MyCart from '../../components/my-cart'
import MyAddress from '../../components/my-address'
import MyOwn from '../../components/my-owan'
export default function index() {
  return (
    <>
     <MyHeader/>
     <div className='container'>
     <Divider orientation="left">基本信息管理</Divider>
      <MyOwn/>
     <Divider orientation="left">收货地址管理</Divider>
     <MyAddress/>
     <Divider orientation="left">我的购物车</Divider>
     <MyCart/>
      </div>
     <div className='bottom'>
      <MyFooter />
    </div>
    </>
    
  )
}
