import React from 'react'
import 'antd/dist/antd.css';
import {Tabs} from 'antd'
import {App, Landing, Websites} from "./TabTable";
import Button from "../../../common/Button";

const {TabPane} = Tabs;

const TabInfo = () => {
    return (
        <div className="wrapper">
            <div className="studio_heading">
                <h2>Процесс работы</h2>
            </div>
            <div className="tab">
                <Tabs tabPosition={'left'}>
                    <TabPane tab="Лендинг" key="1">
                        <Landing/>
                    </TabPane>
                    <TabPane tab="Многостраничный сайт" key="2">
                        <Websites/>
                    </TabPane>
                    <TabPane tab="Приложение" key="3">
                        <App/>
                    </TabPane>
                </Tabs>
            </div>
            <div className="tab_btn">
                <Button/>
            </div>
        </div>
    )
}

export default TabInfo