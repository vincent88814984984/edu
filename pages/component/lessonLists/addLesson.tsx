import { Form, Input, Modal } from "antd";
import { FC } from 'react';
import { LessonType } from "./joinLesson";

export const AddLesson: FC<LessonType> = ({ visible, hideModal }) => {
    const [form] = Form.useForm();
    // 点击确认的回调
    // const handleOk = async () => {
    //     try {
    //         const data = await form.validateFields();
    //         console.log(data);

    //         await contract.add(data);
    //         reset();
    //         setVisible(false);
    //     } catch (err) {
    //     }
    // }
    return (
        <div>
            <Modal title={"加入课程"} okType="default" okText='确定' cancelText='取消' open={visible} onCancel={hideModal}>
                <Form form={form}>
                    <Form.Item label='课程编号'>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}