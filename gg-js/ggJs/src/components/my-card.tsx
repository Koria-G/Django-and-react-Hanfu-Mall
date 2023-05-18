import React, { useState } from 'react'
import {
  LikeOutlined,
  DislikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { Avatar, Card, Popover } from 'antd'

const { Meta } = Card

const MyCard: React.FC = () => {
  const [like, setLike] = useState(true)
  const toggleLike = () => {
    setLike(!like)
  }
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  console.log(like)
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        like ? (
          <LikeOutlined key="like" onClick={toggleLike} />
        ) : (
          <DislikeOutlined key="dislike" onClick={toggleLike} />
        ),
        <Popover content={content} title="Title" trigger="click">
          <MessageOutlined key="edit" onClick={() => {}} />
        </Popover>,

        <ShareAltOutlined key="share" />,
      ]}>
      <Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </Card>
  )
}

export default MyCard
