import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import PersonForm from "./personModal";
import { ethers } from "ethers";
import { personContractABI, personContractAddress } from "./personContract";

export type PersonType = {
    name: string;
    userName: string;
    college: string;
    department: string;
    major: string;
    class: string;
    personID: string;
}
const DEFAULT = "--";

const Person: React.FC = () => {
    const [record, setRecord] = useState<PersonType>();
    // const provider = new ethers.providers.JsonRpcProvider();
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(personContractAddress, personContractABI, signer);
    const run = async () => {
        const res = await contract.getPerson();
        setRecord(res);
    }
    useEffect(() => {
        run();
    }, [])
    return (
        <div style={{ display: 'flex',justifyContent: 'center' }}>
            
            <div style={{ flex: 0.5, width: 100 }}>


                <Descriptions title="个人信息" bordered >
                    <Descriptions.Item label="姓名" labelStyle={{ width: 200 }} span={3}>{record?.name || DEFAULT}</Descriptions.Item>
                    <Descriptions.Item label="昵称" span={3}>{record?.userName || DEFAULT}</Descriptions.Item>
                    <Descriptions.Item label="学号" span={3}>{record?.personID || DEFAULT}</Descriptions.Item>
                    <Descriptions.Item label="学校" span={3}>{record?.college || DEFAULT}</Descriptions.Item>
                    <Descriptions.Item label="院系" span={3}>{record?.department || DEFAULT}</Descriptions.Item>
                    <Descriptions.Item label="专业" span={3}>{record?.major || DEFAULT}</Descriptions.Item>
                    <Descriptions.Item label="班级" span={3}>{record?.class || DEFAULT}</Descriptions.Item>
                </Descriptions>
            </div>
            <PersonForm contract={contract} reset={run} record={record} />
        </div>
    );
}

export default Person;