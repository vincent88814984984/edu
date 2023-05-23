import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import React, { useState } from 'react';
import { AddLesson } from './addLesson';
import { JoinLesson } from './joinLesson';

export const LessonButton: React.FC = () => {
    const [visibleJoin, setVisibleJoin] = useState<boolean>(false);
    const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
    function showJoinModal() {
        setVisibleJoin(true);
    }
    function showAddModal() {
        setVisibleAdd(true);
    }
    const hideJoinModal = () => {
        setVisibleJoin(false);
    }
    function hideAddModal() {
        setVisibleAdd(false);
    }
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a onClick={showJoinModal}>
                    加入课程
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={showAddModal}>
                    创建课程
                </a>
            ),
        },
    ];
    return (
        <div>
            <Dropdown menu={{ items }} placement="bottomLeft">
                <Button>加入/创建课程</Button>
            </Dropdown>
            <JoinLesson visible={visibleJoin} hideModal={hideJoinModal}></JoinLesson>
            <AddLesson visible={visibleAdd} hideModal={hideAddModal}></AddLesson>
        </div>
    )
};
