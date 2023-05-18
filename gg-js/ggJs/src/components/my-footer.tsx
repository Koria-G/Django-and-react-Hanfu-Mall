import React from 'react'
import '@/style/my-footer.scss'

const MyFooter: React.FC = () => {
  return (
    <div className="footer">
      <ul className="about">
        <li>
          <a href="">关于我们</a>
        </li>
        <li>
          <a href="">社区公约</a>
        </li>
        <li>
          <a href="">用户协议</a>
        </li>
        <li>
          <a href="">隐私政策</a>
        </li>
        <li>
          <a href="">帮助中心</a>
        </li>
      </ul>
      <p className="copyright">
        Copyright ©koria 基于django的汉服商城 版权所有
      </p>
    </div>
  )
}
export default MyFooter
