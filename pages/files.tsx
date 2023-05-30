import React, { useState } from "react";

import {FloatButton, Table, Space, Button, Modal, Upload} from "antd";
import {UploadOutlined, InboxOutlined} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { UploadProps } from 'antd';

interface UserFile{
    name: string;
    size: string;
    date: string;
    type: string;
}

const files: UserFile[] = [
    {
      name: "file1.txt",
      size: "13 KB",
      date: "2023-5-14",
      type: "text"
    },
    {
      name: "file2.pdf",
      size: "216 KB",
      date: "2023-5-14",
      type: "pdf"
    },
    {
      name: "file3.jpg",
      size: "73 KB",
      date: "2023-5-14",
      type: "image"
    },
    // ...更多文件
  ];

const columns: ColumnsType<UserFile> = [
    {
        title: '文件名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '大小',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: '更新日期',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '文件类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, __) =>{
            return (
                <Space>
                    <Button>修改</Button>
                    <Button danger>删除</Button>
                </Space>
            )
        }
    },
]

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

export default function(){

    const [isUploadShow, setUploadShow] = useState(false);

    return (
        <>
        <Modal title="上传文件" 
        open={isUploadShow} 
        onOk={()=>setUploadShow(false)} 
        onCancel={()=>setUploadShow(false)} 
        okText="确认"
        cancelText="取消"
        okType="dashed"
        destroyOnClose
        >
            <Upload.Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
                </p>
            </Upload.Dragger>
        </Modal>

        <FloatButton onClick={() => setUploadShow(true)} type="primary" icon={<UploadOutlined />} />
        <Table columns={columns} pagination={{ position: ["none", "bottomRight"] }} dataSource={files} />
        </>
    )
}