import React, { useState } from "react";

import {Input} from "antd";

import { Card, List ,notification,  Button} from 'antd';

import {ShoppingCartOutlined, EllipsisOutlined,SmileOutlined } from '@ant-design/icons'


const { Search } = Input;

interface IProduct{
    title: string;
    desc: string;
    price: number
}

const products: IProduct[] = [
    {
        title: "测试商品1",
        desc: "这是测试商品1的商品介绍",
        price: 10
    },
    {
        title: "测试商品2",
        desc: "这是测试商品1的商品介绍",
        price: 15
    },
    {
        title: "测试商品3",
        desc: "这是测试商品1的商品介绍",
        price: 20
    },
    {
        title: "测试商品4",
        desc: "这是测试商品1的商品介绍",
        price: 25
    },
    {
        title: "测试商品1",
        desc: "这是测试商品1的商品介绍",
        price: 10
    },
]

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

export default function(){
    const [position, setPosition] = useState<PaginationPosition>('bottom');
    const [align, setAlign] = useState<PaginationAlign>('center');

    const [api, contextHolder] = notification.useNotification();

    return <>
         {contextHolder}
        <Search
            placeholder="input search text"
            allowClear
            enterButton="搜索"
            size="large"
        />
        <List 
            grid={{ gutter: 16, column: 4 }}
            pagination={{ position, align }}
            dataSource={products}
            renderItem={
                (item: IProduct)=>(
                    <Card title={item.title} 
                    
                    extra={<div>{item.price} wei</div>}
                    actions={[
                        <Button icon={<ShoppingCartOutlined key="buy" />} onClick={()=>{
                            api.open({
                                message: '购买成功',
                                description:
                                  '文件已经添加到您的个人文件中',
                                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                              });
                        }} ></Button>,
                        <Button icon={<EllipsisOutlined key="ellipsis" />}></Button>,
                      ]}>
                        {item.desc}
                    </Card>
                )
            }
        />
    </>
}