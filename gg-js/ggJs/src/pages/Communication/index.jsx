import React, { useState,useEffect } from 'react'
import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import { Link, useParams } from 'react-router-dom'
import http from '@/services/http.js'
import { Col, Divider, Row,Button, FloatButton, Avatar, Card, Popover} from 'antd';
import {
  LikeOutlined,
  DislikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
  QqOutlined,
  WechatOutlined
} from '@ant-design/icons'

const { Meta } = Card

export default function index() {
  const [like, setLike] = useState(true)
  const toggleLike = () => {
    setLike(!like)
  }
  const content = (
    <div>
      <p>留言系统，暂未开发</p>
    </div>
  )

  const inner=(
    <div style={{textAlign:'center'}}>
      <QqOutlined  style={{ fontSize: '26px', color: '#67c9f9' ,marginRight:30}}/>
      <WechatOutlined style={{ fontSize: '26px', color: '#00cc44' }}/>
    </div>
  )

  const [data,setData]=useState([])
  //获取数据
  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/comm`);
      setData(result.data);
    }
    fetchData()
    },[])
    console.log(data)

  return (
    <>
    <MyHeader/>
    <div className='container'>
    <Row gutter={[16, 24]}>
      
        {
          data.map(item=>{
            return(
              <Col span={8} key={item.id}>
                <Card
                
        actions={[
          like ? (
            <LikeOutlined key="like" onClick={toggleLike} />
          ) : (
            <DislikeOutlined key="dislike" onClick={toggleLike} />
          ),
          <Popover content={content} title="Title" trigger="click">
            <MessageOutlined key="edit" />
          </Popover>,
          <Popover content={inner} title="Share" trigger="click"><ShareAltOutlined key="share" /></Popover>,
          
        ]}>
        <Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
        <p>{item.content}</p>
        <img
          alt="example"
          src={item.img_comm}
        />
        <video src={item.vedio_comm} controls></video>
        </Card>
      </Col>
            )
          })
        }
      
     
    </Row>
    </div>
    <div className='bottom'>
      <MyFooter />
    </div>
    </>
    
  )
}
