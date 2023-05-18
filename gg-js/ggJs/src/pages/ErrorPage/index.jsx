import React from 'react'
import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import { Link } from 'react-router-dom'
import './index.scss'
export default function index() {
  return (
    <>
    {/* <MyHeader/> */}
    <div className='error'>
      <h1 style={{paddingTop:200}}><span>404</span>Not Found</h1>
      <h1 style={{marginLeft:600}}>页面正在开发中</h1>
      <div className='back'><Link to='/'>点击返回登录页面</Link></div>
    </div>
    <MyFooter/>
    </>
  )
}
