import { TabsProps } from 'antd';
import HomeworkList from './homework/homeworkList';

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
      label: `作业`,
      children: <HomeworkList></HomeworkList>,
    },
    {
      key: '2',
      label: `考试`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `课程资料`,
      children: `Content of Tab Pane 3`,
    },
  ],
  '2': [
    {
      key: '1',
      label: `发布作业`,
      children: 1,
    },
    {
      key: '2',
      label: `发布考试`,
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
      label: `发布作业`,
      children: 1,
    },
    {
      key: '2',
      label: `发布考试`,
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
  ]
}