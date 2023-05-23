import React from 'react';
import {Tabs} from 'antd';
import {ClassTab} from './component/classTab/tab';


const onChange = (key: string) => {
    console.log(key);
};

const Index: React.FC = () => (
    <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        size={"large"}
        items={[
            {
                label: `我是教师`,
                key: '1',
                children: <ClassTab tabNum={1}/>,
            },
            {
                label: `我是助教`,
                key: '2',
                children: <ClassTab tabNum={2}/>,
            },
            {
                label: `我是学生`,
                key: '3',
                children: <ClassTab tabNum={3}/>,
            },
        ]}
    />
);

export default Index;