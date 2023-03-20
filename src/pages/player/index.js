import React, { memo } from 'react';

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style';

const HJWPlayer = memo(() => {
    return (
        <PlayerWrapper>
            <div className='content wrap-v2'>
                <PlayerLeft>
                    <h2>HJWPlayerInfo</h2>
                    <h2>HJWSongContent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>HJWSimlPlaylist</h2>
                    <h2>Download</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})

export default HJWPlayer;