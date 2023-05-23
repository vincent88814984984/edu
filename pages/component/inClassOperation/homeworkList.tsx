import React from 'react';
import {Card} from 'antd';


const HomeworkList: React.FC = () => {
    const list = new Array(16).fill({"title": '作业', 'extra': "/classEventDetail"});
    return (<Card title="Card title">
        {list.map((obj) => {
            // eslint-disable-next-line react/jsx-key
            return (<Card title={obj.title} extra={<a href={obj.extra}>作业详情</a>}></Card>)
        })}
    </Card>);
};

export default HomeworkList;