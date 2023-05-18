import React from 'react'
import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import { Link } from 'react-router-dom'
import '@/pages/ErrorPage/index.scss'

export default function index() {
  return (
    <>
    <MyHeader/>
    <div className='error'>
      
      <h1 style={{marginLeft:600,width:400,paddingTop:200}}>
        <a href='http://127.0.0.1:8000/admin/' target='_blank' >再次点我,进入 
        <span>后台管理</span>
        </a>
      </h1>
      
    </div>
    <MyFooter/>
    </>
  )
}
