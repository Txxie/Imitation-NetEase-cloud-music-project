import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';
// import { getNewAlbums } from '@/services/recommend';

import { Carousel } from 'antd';
import HJWAlbumCover from '@/components/album-cover';
import HJWThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';
import { NEW_ALBUM_PER_PAGE } from '@/common/constants';

const HJWNewAlbum = memo(() => {

    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    const pageRef = useRef();
    useEffect(() => {
        dispatch(getNewAlbumAction(10));
    }, [dispatch]);

    // useEffect(() => {
    //     getNewAlbums(10).then((res) => {
    //         console.log(res);
    //     })
    // })
    const newAlbum = Array.isArray(newAlbums) ? newAlbums : [];

    return (
        <AlbumWrapper>
            <HJWThemeHeaderRCM title="新碟上架" />
            <div className='content'>
                <button className='arrow arrow-left sprite_02'
                    onClick={e => pageRef.current.prev()}></button>
                <div className='album'>
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbum.slice(item * NEW_ALBUM_PER_PAGE, (item + 1) * NEW_ALBUM_PER_PAGE).map(iten => {
                                                return <HJWAlbumCover key={iten.id}
                                                    info={iten}
                                                    size={100}
                                                    width={118}
                                                    bgp="-570px" />
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className='arrow arrow-right sprite_02'
                    onClick={e => pageRef.current.next()} ></button>
            </div>
            {/* <div>
                {
                    newAlbums.map((item, index) => {
                        return <div key={item.id}>{item.name}</div>
                    })
                }
            </div> */}
        </AlbumWrapper >
    )
})

export default HJWNewAlbum;