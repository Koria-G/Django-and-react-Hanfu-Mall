import React,{useEffect,useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input,message } from 'antd'
import http from '@/services/http.js'
import {Link, useNavigate} from 'react-router-dom'
import { setToken, setId} from '@/utils'

const MyForm = () => {
  // 发送axios请求，获取用户数据
  const [user,setUser]=useState([])
  const navigate=useNavigate()

  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/user`);
      setUser(result.data);
    }
    fetchData()
    },[])
    console.log(user)
    
  const onFinish = (values) => {
    if(values.username=='koria'&&values.password=='Jyg19990809'){
      // window.location.href('http://127.0.0.1:8000/admin')
      console.log('you are manage')
      navigate('/manage')
      // navigate('/admin')
      setToken(values.username)
      return
    }
    user.filter((item)=>{
      if(item.uname==values.username && item.pwd==values.password){
        // 路由跳转，卸载参数，但是其他页面不能
        // navigate('/home',{state:{username:`${values.username}`}})
        navigate('/home')
        setToken(values.username)
        setId(item.id)
        return(message.ok('登录成功'))
      }
      
    })
  
    console.log('Received values of form: ', values)
    
  }
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values)
  //   http.post(`http://127.0.0.1:8000/api/login/`,{
  //     "username":values.username,
  //     "password":values.password,
  //   }).then(res=>{
  //     if(res.data.msg==="登录成功！"){
  //       alert(res.data.msg)
  //       navigate('/manage')
  //     }
  //     else{
  //        message.error(res.data.msg) 
  //     }
  //   }) 
  // }

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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to='/register'>register now!</Link>
      </Form.Item>
    </Form>
  )
}

export default MyForm
