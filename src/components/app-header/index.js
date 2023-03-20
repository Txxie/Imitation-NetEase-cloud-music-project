import React, { memo } from 'react';

import { headerLinks } from "@/common/local-data.js";

import { NavLink } from 'react-router-dom';
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';

const HJWAppHeader = memo(() => {

    // 页面代码
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link} exact>
                    {item.title}
                    <i className='sprite_01 icon'></i>
                </NavLink>
            )
        } else {
            return <a href='item.link'>{item.title}</a>
        }
    }

    // 返回的JSX
    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>
                <HeaderLeft>
                    <a href='#/discover' className='logo sprite_01'>动听音乐</a>
                    <div className='select-list'>
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
                    {/* 为什么用div不用button？div设置样式比较方便，可以给div添加监听达到button效果 */}
                    <div className='center'>创作者中心</div>
                    <div className=''>登录</div>
                </HeaderRight>
            </div>
            <div className='divider'></div>
        </HeaderWrapper>
    )
})

export default HJWAppHeader;