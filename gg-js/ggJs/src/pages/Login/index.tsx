import React, { useState } from 'react'
import MyForm from '@/components/my-form'
import MyFooter from '@/components/my-footer'
import type { RadioChangeEvent } from 'antd';
import {Radio} from 'antd'

import './index.scss'
export default function index() {
  const [value,setValue]=useState(1)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div id="login">
        <h1 className="text">
          <span>Koria </span>汉服屋
        </h1>

        <div className="form-style">
          <h2 className="login">登录</h2>
          <p className="user">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>用户</Radio>
            <Radio value={2}>管理员</Radio>
            
          </Radio.Group>
          </p>
          <MyForm />
        </div>
        <MyFooter />
      </div>
    </>
  )
}
