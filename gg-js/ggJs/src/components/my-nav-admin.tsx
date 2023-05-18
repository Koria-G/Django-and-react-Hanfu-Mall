import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('商品管理', 'sub1', <MailOutlined />, [
    getItem('商品展示', '1'),
    getItem('添加商品·', '2'),
    getItem('删除商品', '3'),
  ]),
  getItem('订单管理', 'sub2', <AppstoreOutlined />, [
    getItem('订单查看', '4'),
    getItem('订单撤销·', '5'),
    getItem('发货订单', '6'),
    getItem('订单统计', '7'),
  ]),
  getItem('内容管理', 'sub3', <ContainerOutlined />, [
    getItem('内容查看', '8'),
    getItem('内容过滤', '9'),
  ]),
  getItem('统计分析', '10',<PieChartOutlined/>),


];

const MyNavAdmin: React.FC = () => {
  return (
    <div style={{ width: 256 ,marginLeft:100}}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default MyNavAdmin;