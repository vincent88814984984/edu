import React, {CSSProperties} from 'react';
import {Card} from 'antd';
import {useRouter} from "next/router";

const cardStyle: CSSProperties = {
    width: '300px',
    marginRight: '40px',
    marginTop: '30px',
};


const Lesson: React.FC = () => {
    const list = new Array(15).fill({"title": "课程名称"});
    const router = useRouter();
    const Click = () => {
        router.push('/');
    }
    return (<div style={{display: "flex", flexWrap: "wrap"}}>
        {list.map((obj) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <Card style={cardStyle} hoverable title={obj.title} onClick={Click} extra={<a href="#">详情</a>}>
                    <p>课程类型</p>
                    <p>课程描述</p>
                    <p>课程教师</p>
                </Card>)
        })}
    </div>);
};

export default Lesson;