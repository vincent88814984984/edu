import {TabsProps} from 'antd';
import HomeworkList from '@/pages/component/inClassOperation/homeworkList';
import SignList from "@/pages/component/inClassOperation/signList";
import PaperList from "@/pages/component/inClassOperation/paperList";

const getUserType = (address: string): string => {
    return '1';
}

export const getTabs = (): TabsProps['items'] => {
    // const userType = getUserType('1');
    const userType = '1';
    return tabMap[userType];
}
//1:学生,2:老师,3:助教
const tabMap = {
    '1': [
        {
            key: '1',
            label: `课堂签到`,
            children: <SignList></SignList>,
        },
        {
            key: '2',
            label: `课堂作业`,
            children: <HomeworkList></HomeworkList>,
        },
        {
            key: '3',
            label: `课程资料`,
            children: <PaperList></PaperList>,
        },
    ],
    '2': [
        {
            key: '1',
            label: `发布签到`,
            children: 1,
        },
        {
            key: '2',
            label: `发布作业`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `上传资料`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `导入学生名单`,
            children: `导入`,
        },
    ],
    '3': [
        {
            key: '1',
            label: `课堂签到`,
            children: <SignList></SignList>,
        },
        {
            key: '2',
            label: `课堂作业`,
            children: <HomeworkList></HomeworkList>,
        },
        {
            key: '3',
            label: `课程资料`,
            children: <PaperList></PaperList>,
        },
    ]
}