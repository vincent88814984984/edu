import { SmileOutlined, HeartOutlined,HomeOutlined,UserOutlined } from '@ant-design/icons';

export type menuType = {
  label: string;
  key: string;
  icon: any;
  children?: any
}
const asideMenuConfig: menuType[] = [
  {
    label: '主页',
    key: '/',
    icon: HomeOutlined,
  },
  {
    label: '课程',
    key: '/class',
    icon: HeartOutlined,
  },
  {
    label: '个人中心',
    key: '/person',
    icon: UserOutlined,
  },
];

export { asideMenuConfig };
