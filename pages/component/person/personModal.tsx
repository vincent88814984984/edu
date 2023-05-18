import { Button, Form, Input, Modal } from "antd";
import React, { FC, useState } from "react";
import { PersonType } from "./person";

type PersonFormType = {
    contract: any;
    reset: any;
    record: PersonType | undefined;
}
const PersonForm: FC<PersonFormType> = ({ contract, reset, record }) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setVisible(true);
    }
    const hideModal = () => {
        setVisible(false);
    }
    const handleOk = async () => {
        try {
            const data = await form.validateFields();
            console.log(data);

            await contract.add(data);
            reset();
            setVisible(false);
        } catch (err) {
        }
    }
    return (
        <div>
            <Button onClick={showModal} type={"primary"} ghost style={{ float: "right" }}>编辑个人信息</Button>
            <Modal title={"编辑个人信息"} okType="default" okText='确定' cancelText='取消' open={visible} onOk={handleOk} onCancel={hideModal}>
                <Form form={form}>
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[{ required: true, message: '请填入你的姓名' }]}
                        initialValue={record?.name}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="昵称"
                        name="userName"
                        rules={[{ required: true, message: '请填入你的昵称' }]}
                        initialValue={record?.userName}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="学号"
                        name="personID"
                        rules={[{ required: true, message: '请填入你的学号' }]}
                        initialValue={record?.personID}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="学校"
                        name="college"
                        rules={[{ required: true, message: '请填入你的学校' }]}
                        initialValue={record?.college}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="院系"
                        name="department"
                        rules={[{ required: true, message: '请填入你的院系' }]}
                        initialValue={record?.department}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="专业"
                        name="major"
                        rules={[{ required: true, message: '请填入你的专业' }]}
                        initialValue={record?.major}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="班级"
                        name="class"
                        rules={[{ required: true, message: '请填入你的班级' }]}
                        initialValue={record?.class}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>)
}

export default PersonForm;