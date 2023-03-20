import React, { memo } from 'react';//可以不加分号，但尽量加
import { FriendWrapper } from './style';

const HJWFriend = memo(() => {
    return (
        <FriendWrapper>
            <div className="content wrap-v2">
                <div className="pic">
                    <a className="login" href="/#">立即登录</a>
                </div>
            </div>
        </FriendWrapper>
        // <div>
        //     <h1 style={{ 'textAlign': 'center' }}>黄嘉雯</h1>
        //     <h1 style={{ 'textAlign': 'center' }}>此页面暂不展示内容</h1>
        //     <h1 style={{ 'textAlign': 'center' }}>黄嘉雯</h1>
        //     <h1 style={{ 'textAlign': 'center' }}>此页面暂不展示内容</h1>
        //     <h1 style={{ 'textAlign': 'center' }}>黄嘉雯</h1>
        //     <h1 style={{ 'textAlign': 'center' }}>此页面暂不展示内容</h1>
        // </div>
    )
})

export default HJWFriend;