import React from "react";
import {useRoutes} from "react-router-dom";
import {NavLink} from "react-router-dom";
import routes from './router'
import {Button} from 'antd'
import {HeartTwoTone} from "@ant-design/icons";
import AppWrapper from "@/style";

export default function App(){
    const element = useRoutes(routes)

    return (
        <AppWrapper>
            <h1>App...</h1>
            <NavLink to={"login"} className={({isActive}) => isActive?"nav-link":void 0}>点我登录</NavLink>&nbsp;
            <NavLink to={"/"}>退出登录</NavLink>&nbsp;
            <NavLink to={"/Counter"} className={({isActive})=>isActive?"nav-link":void 0}>计算页面</NavLink>&nbsp;
            <Button shape={"circle"} icon={
                <HeartTwoTone twoToneColor={"#eb2f96"} style={{fontSize:'18px'}} />
            }></Button>
            {element}
        </AppWrapper>
    )
}
