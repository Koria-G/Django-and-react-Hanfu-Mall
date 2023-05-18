import React, { useState } from 'react';
import '../style/my-pay.scss';
import axios from 'axios';
import {  Modal } from 'antd';

export default function MyPay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    axios.post('http://127.0.0.1:8000/pay/').then(res=>console.log(res));
    // axios.post('http://127.0.0.1:8000/pay').then(res=>console.log(res));
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className='payH1'>请选择支付方式</h1>
      <div className='pay'>
        <div className='zhifubao' onClick={showModal} ><p>支付宝支付</p></div>
        <div className='weixing' onClick={showModal} ><p>微信支付</p></div>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        由于没有开通支付接口，支付失败！
      </Modal>
    </div>
  )
}
