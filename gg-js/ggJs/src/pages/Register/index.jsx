import React from 'react'
import MyForm from '@/components/form-register'
import MyFooter from '@/components/my-footer'

import '@/pages/Login/index.scss'
export default function index() {
  return (
    <>
      <div id="login">
        <h1 className="text">
          <span >Koria </span>汉服屋
        </h1>

        <div className="form-style" style={{paddingTop:30,marginTop:30}}>
          <h2 className="login" >注册</h2>
          
          <MyForm />
        </div>
        <MyFooter />
      </div>
    </>
  )
}
