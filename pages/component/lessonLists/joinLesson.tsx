import { Form, Input, Modal } from "antd";
import { FC } from "react";


export type LessonType = {
    visible: boolean,
    hideModal: () => void,
}
export const JoinLesson: FC<LessonType> = ({ visible, hideModal }) => {
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
            {/* <Button onClick={showModal} type="primary" ghost>创建课程</Button> */}
            <Modal title={"创建课程"} okType="default" okText='确定' cancelText='取消' open={visible} onCancel={hideModal}>
                <Form form={form}>
                    <Form.Item label='课程名字'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='课程简介'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='课程学员'>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}