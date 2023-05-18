import React,{useEffect,useState} from 'react'
import MyCarousel from '@/components/my-carousel'
import MyHeader from '@/components/my-header'
import MyFooter from '@/components/my-footer'
import http from '@/services/http.js'
import { Card, Col, Divider, Row,FloatButton } from 'antd';
import './index.scss'
import Item from 'antd/es/list/Item';
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'


const { Meta } = Card;


export default function index() {

  const addCookies=(id,url)=>{
    console.log(1)
    cookie.save(`goods${id}`,`${url}`,{path:'/'})

  }
  console.log("data",new Date())
 
  const [isLoading,setIsLoading]=useState(false)
  const [data,setData]=useState([])

  //获取数据
  useEffect( ()=>{
    async function fetchData() {
      const result = await http.get(`/mall`);
      setData(result.data);
      setIsLoading(true)
    }
    fetchData()
    },[])
   const girl=data.filter((item)=>{return item.category==5})
   const man=data.filter((item)=>{return item.category==6})
   const child=data.filter((item)=>{return item.category==7})
   const near=data.filter((item)=>{return item.category==8})
    console.log(girl,man,child,near)

    // 调转到详情情页面

    return(
    <div >
    <MyHeader />
    <MyCarousel/>
    
    <div className='container'>
      <Divider orientation="left"><h2 className='h2Name'>汉服女装</h2></Divider>
      <Row gutter={[16, 24]}>
      {girl.map((item)=>{
          return(
              <Col span={6} key={item.id}>
                 <Link to={`/detail/${item.id}`} >
                    <Card
                    hoverable
                    cover={<img alt="example" src={item.img} />}
                    onClick={()=>addCookies(item.id,item.img)}
                  >
                <Meta title={item.gname} description={item.gdesc} />
              </Card>
              </Link>
            </Col>
          )
        })}
        

      </Row>
      <Divider orientation="left"><h2 className='h2Name'>汉服男装</h2></Divider>
      <Row gutter={[16, 24]}>
      {man.map((item)=>{
          return(
            <Col span={6} key={Item.id}>
               <Link to={`/detail/${item.id}`} >
                <Card
                hoverable
                cover={<img alt="example" src={item.img} />}
                onClick={()=>addCookies(item.id,item.img)}
                >
              <Meta title={item.gname} description={item.gdesc} />
            </Card>
          </Link>
        </Col>
          )
        })}
        

      </Row>
      <Divider orientation="left"><h2 className='h2Name'>汉服童装</h2></Divider>
      <Row gutter={[16, 24]}>
        {child.map((item)=>{
            return(
              <Col span={6} key={Item.id}>
                <Link to={`/detail/${item.id}`} > 
                  <Card
                  hoverable
                  cover={<img alt="example" src={item.img} />}
                  onClick={()=>addCookies(item.id,item.img)}
                  >
                  <Meta title={item.gname} description={item.gdesc} />
                </Card>
              </Link>            
        </Col>
          )
        })}

      </Row>
      <Divider orientation="left"><h2 className='h2Name'>周边配饰</h2></Divider>
      <Row gutter={[16, 24]}>
        {near.map((item)=>{
            return(
              <Col span={6} key={Item.id}>
                <Link to={`/detail/${item.id}`} >
                  <Card
                    hoverable
                    cover={<img alt="example" src={item.img} />}
                    onClick={()=>addCookies(item.id,item.img)}
                  >
                    <Meta title={item.price} description={item.gname} />
                </Card>
                </Link>
           
        </Col>
          )
        })}
      </Row>
    </div>
    <FloatButton.BackTop/>
    <div className='bottom'>
      <MyFooter />
    </div>
    </div>
  
  )
}
