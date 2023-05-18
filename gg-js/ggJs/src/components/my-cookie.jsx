import cookie from 'react-cookies'
import React from 'react'
import { Link } from 'react-router-dom'

  
  export default function my-cookie() {
  const arr=[]
  for(let i=1;i<20;i++){
    if(cookie.load(`goods${i}`)){
      arr.push(cookie.load(`goods${i}`))
    }
  }
  const arr1=arr.filter((item)=>{ return(item!==undefined)})
    return (
      <div>
        {
              arr1.map((item,index)=>{
                return(
                  <>
                  <Link to=`/detail/${index}`><img src={item} alt=""/></Link>
                  </>
                )
              })
            }
      </div>
    )
  }
  