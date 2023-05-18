import React ,{useEffect,useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getToken} from '@/utils'
import http from '@/services/http.js'
import { Divider,Space,Radio,Button, Card,Modal,Form,Input,Select,message} from 'antd'
import '../style/my-address.scss'
import axios from 'axios'

export default function MyAddress() {
  const user=getToken()
  const [check,setCheck]=useState(false)
  const [data,setData]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [name,setName]=useState('')
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
    const mess={
      aphone:value.aphone,
      addr:`${value.address.province}${value.address.street}`,
     
    }
    console.log(message)
      axios.put(`http://127.0.0.1:8000/api/addre/${userinfo[0].id}/`,mess).then(res=>message.success(res.statusText))
      // const res=await http.put(`update/${userinfo.id}`,value)
    
  }

  //获取数据
  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/address`);
      setData(result.data);
      // setIsLoading(true)
    }
    fetchData()
    },[])
    console.log(data)
    const userinfo=data.filter(item=>{ return item.userinfo_name==user})
    // setName(userinfo[0].uname)
    // console.log()

    const checks=(event)=>{
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
              <Card title="地址管理" style={{width:600}} key={item.id}>
                <p>收件人姓名：<span>{item.userinfo_name}</span></p>
                <p>收件人号码：<span>{item.aphone}</span></p>
                <p>收件人地址：<span>{item.addr}</span></p>
                <div className='address-right'><Radio checked={item.isdefault||check} onChange={()=>checks()}>设为默认</Radio> <Button onClick={showModal}>修改地址</Button></div>
              </Card>
            )
          })
        }
        <Modal title="修改地址" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
        onFinish={onFinish}
    name="complex-form"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="收件人姓名">
      <Space>
        <Form.Item
          name="userinfo_name"
          noStyle
          rules={[{ required: true, message: '收件人姓名必须与用户名一致' }]}
        >
          <Input style={{ width: 160 }} placeholder="请输入收件人姓名" />
        </Form.Item>
        
      </Space>
    </Form.Item>
    <Form.Item
        name="aphone"
        label="收件人手机号码"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

    <Form.Item label="收件人地址">
      <Input.Group compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select placeholder="Select province">
            <Option value="四川省" >四川省</Option>
            {/* <Option value="Jiangsu">Jiangsu</Option> */}
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input street" />
        </Form.Item>
      </Input.Group>
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
