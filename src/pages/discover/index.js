import React, { memo } from 'react';//可以不加分号，但尽量加
import { renderRoutes } from "react-router-config";

import { dicoverMenu } from '../../common/local-data';
// import request from "@/services/request";//导入发送网络请求的实例

import { NavLink } from "react-router-dom";
import {
    DiscoverWrapper,
    TopMenu,
} from './style';

const HJWDiscover = memo((props) => {

    // useEffect(() => {
    //     request({
    //         url: "/banner"
    //     }).then(res => {
    //         // console.log(res);
    //     })
    // }, [])

    const { route } = props;

    return (
        <DiscoverWrapper>
            <div className='top'>
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})

export default HJWDiscover;