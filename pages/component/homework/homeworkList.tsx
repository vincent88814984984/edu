import React from 'react';
import { Card } from 'antd';




const HomeworkList: React.FC = () => {
    const list = new Array(16).fill({ "title": '测试作业', 'extra': "/" });
    return (<Card title="Card title">
        {list.map((obj) => {
            // eslint-disable-next-line react/jsx-key
            return (<Card title={obj.title} extra={<a href={obj.extra}>提交作业</a>}></Card>)
        })}
        <Card type="inner" title="Inner Card title" extra={<a href="#" color='blue'>More</a>}>
            Inner Card content
        </Card>
        <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
        >
            Inner Card content
        </Card>
    </Card>);
};

export default HomeworkList;