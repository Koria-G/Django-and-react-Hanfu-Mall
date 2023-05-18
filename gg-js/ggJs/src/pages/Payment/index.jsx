import React, { useState,useEffect } from 'react'
import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import MyCart from '../../components/my-cart'
import MyAddress from '../../components/my-address'
import MyPay from '../../components/my-pay'


import { Button, message, Steps, theme, Card } from 'antd'
const { Step } = Steps
import './index.scss'

  

export default function index() {
  const [current, setCurrent] = useState(0)
  const changeCurren=(i)=>{
    setCurrent(i)
    console.log(i)
  }
  let countStep=(
    current==0 ? <MyAddress/> : current==1?<MyCart/> :current ==2 ?<MyPay/>:current==3 ?<MyPay/>:<div></div>)
  
  return (
    <>
      <MyHeader/>
      <div className='container'>
        <Steps current={current} onChange={changeCurren}>
          <Step title="输入地址" ></Step>
          <Step title="确认订单"></Step>
          <Step title="选择支付方式"></Step>
          <Step title="支付完成"></Step>
        </Steps>
        <div style={{marginTop:40}}>
          {countStep}
        </div>
      </div>
      <div className='bottom'>
        <MyFooter />
      </div>
    </>
  )
}
