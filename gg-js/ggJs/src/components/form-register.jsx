import React,{useEffect,useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input,message } from 'antd'
import http from '@/services/http.js'
import {Link, useNavigate} from 'react-router-dom'
import { setToken} from '@/utils'

const MyForm = () => {
  
  let navigate=useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    http.post(`http://127.0.0.1:8000/api/register/`,{
      "username":values.username,
      "password1":values.password,
      "password2":values.confirm_password
    }).then(res=>{
      if(res.data.msg==="注册成功！"){
        // alert(res.data.msg)
        return(message.success(res.data.msg))
        navigate('/')
      }
      else{
         message.error(res.data.msg) 
      }
    }) 
  }

  return (
    <Form
      validateTrigger={['onBlur', 'onChange']}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item
        label="账号："
        name="username"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{5,11}$/,
            message: '账号由5-11位的数字和字母组成',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '账号不能为空！' },
        ]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        label="密码："
        name="password"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{6,11}$/,
            message: '请输入6-11位的数字和字母组成的密码',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '请输入您的密码!' },
        ]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        label="确认密码："
        name="confirm_password"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{6,11}$/,
            message: '请输入6-11位的数字和字母组成的密码',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '请再次输入您的密码!' },
        ]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm_Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        
      </Form.Item>
    
    </Form>
  )
}

export default MyForm
