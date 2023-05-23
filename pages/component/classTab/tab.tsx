import {CSSProperties, useEffect, useState} from "react";
import {Card} from "antd";
import {useRouter} from 'next/router';


type ClassType = {
    name: string;
    teacher: string;
    classID: string;
}
const cardStyle: CSSProperties = {
    width: '300px',
    marginRight: '10px',
    marginTop: '10px',
};

export const ClassTab = ({tabNum}: { tabNum: number }) => {
    const testCardList1 = new Array(10).fill({"title": "测试课程，我教的"})
    const testCardList2 = new Array(8).fill({"title": "测试课程，我协助的"})
    const testCardList3 = new Array(8).fill({"title": "测试课程，我学的"})
    const router = useRouter();


    const Click = () => {
        router.push('/class');
    }

    let res;
    if (tabNum === 1) {
        res = <div style={{display: "flex", flexWrap: "wrap"}}>
            {testCardList1.map((obj) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Card style={cardStyle} hoverable title={obj.title} onClick={Click} extra={<a href="#">详情</a>}>
                        <p>线性代数</p>
                        <p>数学</p>
                        <p>老师</p>
                    </Card>)
            })}
        </div>
    } else if (tabNum === 2) {
        res = <div style={{display: "flex", flexWrap: "wrap"}}>
            {testCardList2.map((obj) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Card style={cardStyle} hoverable title={obj.title} onClick={Click} extra={<a href="#">详情</a>}>
                        <p>线性代数</p>
                        <p>数学</p>
                        <p>老师</p>
                    </Card>)
            })}
        </div>

    } else if (tabNum === 3) {
        res = <div style={{display: "flex", flexWrap: "wrap"}}>
            {testCardList3.map((obj) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Card style={cardStyle} hoverable title={obj.title} onClick={Click} extra={<a href="#">详情</a>}>
                        <p>线性代数</p>
                        <p>数学</p>
                        <p>老师</p>
                    </Card>)
            })}
        </div>
    }
    return (
        <div>
            {res}
        </div>
    )
}