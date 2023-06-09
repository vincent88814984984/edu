import { Tabs } from 'antd';
import React from 'react';
import { useAccount } from 'wagmi';
import { ClassTab } from './component/classTab/tab';
import { LessonButton } from './component/lessonLists/lessonButton';


const onChange = (key: string) => {
    console.log(key);
};

const Index: React.FC = () => {
    const { address, isConnected, isDisconnected } = useAccount()
    console.log(isConnected);
    if (!isConnected){
        return (<div >请连接钱包后进行操作</div>);
    }
    return (
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            size={"large"}
            tabBarExtraContent={<LessonButton></LessonButton>}
            items={[
                {
                    label: `我是教师`,
                    key: '1',
                    children: <ClassTab tabNum={1} />,
                },
                {
                    label: `我是助教`,
                    key: '2',
                    children: <ClassTab tabNum={2} />,
                },
                {
                    label: `我是学生`,
                    key: '3',
                    children: <ClassTab tabNum={3} />,
                },
            ]}
        />
    );
}

export default Index;