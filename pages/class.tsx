import {Tabs, TabsProps} from "antd";
import {getTabs} from "./component/tabs";

export default function Class() {
    const items: TabsProps['items'] = getTabs();
    return (
        <Tabs defaultActiveKey="1" items={items} centered size="large"/>
    )
}
