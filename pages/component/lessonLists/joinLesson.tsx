import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload } from "antd";
import { FC } from "react";


export type LessonType = {
    visible: boolean,
    hideModal: () => void,
}
export const JoinLesson: FC<LessonType> = ({ visible, hideModal }) => {
    const [form] = Form.useForm();
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
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
            <Modal title={"创建课程"} width={1000} okType="default" okText='确定' cancelText='取消' open={visible} onCancel={hideModal}>
                <Form form={form}>
                    <Form.Item label='课程名字'>
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item label='课程简介'>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label="课程学员导入"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>上传学员名单</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}