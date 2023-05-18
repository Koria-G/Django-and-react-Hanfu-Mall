import React from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import '@/style/my-carousel.scss'
import crouse01 from '@/assets/carousel/1.png'
import crouse02 from '@/assets/carousel/2.png'
import crouse03 from '../assets/carousel/3.png'
import crouse04 from '../assets/carousel/4.png'


const MyCarousel: React.FC = () => {
  return (
    <Carousel autoplay arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} style={{height:400}}>
      <div >
          <img src={crouse01} alt="" style={{height:400}}/>  
      </div>
      <div >
        <img src={crouse02} alt="" style={{height:400}}/>
      </div>
      <div >
          <img src={crouse03} alt="" style={{height:400}}/>  
      </div>
      <div >
        <img src={crouse04} alt="" style={{height:400}}/>
      </div>
    </Carousel>
  )
}
export default MyCarousel
