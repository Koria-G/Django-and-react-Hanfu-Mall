import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Popconfirm } from 'antd'
import {
  LogoutOutlined
} from '@ant-design/icons'
import '@/style/my-header.scss'
import { Link, useNavigate } from 'react-router-dom'
import {getToken,clearToken,clearId} from '@/utils'
import cookie from 'react-cookies'

const MyHeader = () =>{
  const[active,setActive]=useState(0)

  const navigate = useNavigate()
  const loginout = () => {
    clearToken()
    clearId()
    for(let i=0;i<10;i++){
      cookie.remove(`goods${i}`)
    }
    navigate('/')
    
  }
  const handleActive=()=>{
    setActive(0)
    navigate('/home')
  }
  const handleActive1=()=>{
    setActive(1)
    navigate('/comm')
  }
  const handleActive2=()=>{
    setActive(2)
    navigate('/own')
  }
  const handleActive3=()=>{
    setActive(3)
    navigate('/cart')
  }
  // const username=state.state.username
  return (
    <div className='header'>
      <div className='header-first'>
        <div className='logo'>
          <img src={logo} alt="" /></div>
        <div className='user'>
          <ul>
            <li>欢迎登陆，{getToken()}</li>
            <li>
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={loginout}>
                <LogoutOutlined /> 退出
              </Popconfirm>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-second'>
        <ul>
        <li className={active==0?'activeHeader':''} onClick={handleActive}>首页</li>
        <li className={active==1?'activeHeader':''} onClick={handleActive1}>话题中心</li>
        <li className={active==2?'activeHeader':''} onClick={handleActive2}>个人中心</li>
        <li className={active==3?'activeHeader':''} onClick={handleActive3}>购物车</li>
      </ul></div>
    </div>
   
  )
}

export default MyHeader;
