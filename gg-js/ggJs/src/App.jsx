// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 导入页面组件
import Login from '@/pages/Login'
import ShowMall from '@/pages/ShowMall'
import GoodsDetail from '@/pages/GoodsDetail'
import ErrorPage from '@/pages/ErrorPage'
import {AuthRoute} from '@/components/AuthRoute'
import Manage from '@/pages/Manage'
import Register from '@/pages/Register'
import Cart from '@/pages/Cart'
import Payment from '@/pages/Payment'
import Own from '@/pages/Own'
import Comm from '@/pages/Communication'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<AuthRoute><ShowMall /></AuthRoute>} />
          <Route path='/detail/:id' element={<AuthRoute><GoodsDetail/></AuthRoute>}/>
          <Route path="/manage" element={<AuthRoute><Manage /></AuthRoute>} />         
          <Route path='/cart' element={<AuthRoute><Cart/></AuthRoute>} />
          <Route path='/payment' element={<AuthRoute><Payment/></AuthRoute>} />
          <Route path='/own' element={<AuthRoute><Own/></AuthRoute>} />
          <Route path='/comm' element={<AuthRoute><Comm/></AuthRoute>} />

          <Route path='/*' element={<ErrorPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
