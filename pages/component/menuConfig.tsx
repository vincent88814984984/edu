import {SmileOutlined, HeartOutlined, HomeOutlined, UserOutlined, ShopOutlined, CloudServerOutlined} from '@ant-design/icons';

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
        icon: HeartOutlined,
    },
    // {
    //     label: '课程详情',
    //     key: '/class',
    //     icon: HeartOutlined,
    // },
    {
        label: '课程广场',
        key: '/lesson',
        icon: HomeOutlined,
    },
    {
        label: '个人中心',
        key: '/person',
        icon: UserOutlined,
    },
    {
        label: '资源广场',
        key: '/market',
        icon: ShopOutlined
    },
    {
        label: '我的文件',
        key: '/files',
        icon: CloudServerOutlined
    },
];

export {asideMenuConfig};
