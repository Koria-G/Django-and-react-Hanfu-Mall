import React ,{useEffect,useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getToken} from '@/utils'
import http from '@/services/http.js'
import { Divider,Space,Radio,Button, Card,Modal,Form,Input,Select,message} from 'antd'
import '../style/my-address.scss'
import axios from 'axios'

export default function MyOwn() {
  const user=getToken()
  const [check,setCheck]=useState(false)
  const [data,setData]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish=(value)=>{
    console.log(value)
  
      axios.put(`http://127.0.0.1:8000/api/update/${userinfo[0].id}/`,value).then(res=>message.success(res.statusText))
      // const res=await http.put(`update/${userinfo.id}`,value)
    
  }

  //获取数据
  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/user`);
      setData(result.data);
      // setIsLoading(true)
    }
    fetchData()
    },[])
    console.log(data)
    const userinfo=data.filter(item=>{return item.uname==user})
    // var content=userinfo[0].uname
    // console.log(content)
    const checks=()=>{
      setCheck(!check)
    }
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
    
  return (
    <div className='address'>
        {
          userinfo.map(item=>{
            return(
              <Card title="基本信息" style={{width:600}} key={item.id}>
                <p>姓名：<span>{item.uname}</span></p>
                <p>密码：<span>{item.pwd}</span></p>
                <div className='address-right'><Button onClick={showModal}>修改密码</Button></div>
              </Card>
            )
          })
        }
        <Modal title="修改个人信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <span style={{color:'red',fontSize:14}}>用户名不能更改哦！</span>
        <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
  
      <Form.Item
        label="姓名："
        name="uname"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{5,11}$/,
            message: '姓名由5-11位的数字和字母组成',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '用户名不能更改！' },
        ]}>
        <Input
          // disabled
          // defaultValue={userinfo[0].uname}
          placeholder='username'
        />
      </Form.Item>
    
    <Form.Item
        label="密码："
        name="pwd"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{6,11}$/,
            message: '请输入6-11位的数字和字母组成的密码',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '请输入您的密码!' },
        ]}>
        <Input
          
          type="password"
          placeholder="Password"
        />
      </Form.Item>

    
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
      
      </div>
  )
}
