import React, { memo } from 'react';

import HJWHopRecommend from './c-cpns/hot-recommend';
import HJWTopBanner from './c-cpns/top-banner';
import HJWNewAlbum from './c-cpns/new-album';
import HJWRecommendRanking from './c-cpns/recommend-ranking';
import HJWHotAnchor from './c-cpns/hot-anchor';
import HJWName from '../../../../components/name';
import HJWId from '../../../../components/id';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style';


function HJWRecommend(props) {

    return (
        <RecommendWrapper>
            <HJWTopBanner />
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HJWHopRecommend />
                    <HJWNewAlbum />
                    <HJWRecommendRanking />
                </RecommendLeft>
                <RecommendRight>
                    <HJWName />
                    <HJWId />
                    <HJWHotAnchor />
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}


export default memo(HJWRecommend);












// function HJWRecommend(props) {
//     const { getBanners, topBanners } = props;

//     // 在useEffect里面完成网络请求的发送
//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>HJWRecommend: {topBanners.length}</h2>
//             {/* <h2>HJWRecommend</h2> */}
//         </div>
//     )
// }

// // mapStateToProps是一个函数，这个函数返回一个对象
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// });

// // mapDispatchToProps是一个函数，这个函数返回一个getBanners函数
// // getBanners函数的作用：通过传入的dispatch，派发封装在actionCreators里的函数
// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HJWRecommend));
















