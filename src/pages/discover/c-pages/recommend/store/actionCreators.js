import * as actionTypes from './constants';

import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getUpList,
    getNewList,
    getOriginList,
    getArtistList
} from '@/services/recommend';

// 把拿到的数据放进redux里面
const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    // newAlbums: res.albums
    newAlbums: res.weekData
})

const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
    // upRanking: res.list[0]
})
const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
    // newRanking: res.list[1]
})
const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
    // originRanking: res.list[2]
})

const changeArtistListAction = (artistList) => ({
    type: actionTypes.CHANGE_ARTIST_LIST,
    artistList
})

export const getTopBannerAction = () => {
    return dispatch => {
        // 在这里发送网络请求
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
}

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res));
            // console.log(res);
        })
    }
}

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumAction(res));
        })
    }
}

export const getTopListAction = (id) => {
    switch (id) {
        case 19723756:
            return dispatch => {
                getUpList().then(res => {
                    // console.log(res);
                    dispatch(changeUpRankingAction(res));
                })
            }
        case 3779629:
            return dispatch => {
                getNewList().then(res => {
                    // console.log(res);
                    dispatch(changeNewRankingAction(res));
                })
            }
        case 2884035:
            return dispatch => {
                getOriginList().then(res => {
                    // console.log(res);
                    dispatch(changeOriginRankingAction(res));
                })
            }
        default:
    }
}

export const getArtistListAction = (area, type, alpha) => {
    return dispatch => {
        getArtistList(area, type, alpha).then(res => {
            // console.log('getArtistListAction', res)
            dispatch(changeArtistListAction(res.artists))
        })
    }
}
// export const getTopListAction = (id) => {
//     return dispatch => {
//         getTopList(id).then(res => {
//             switch (res.playlist.id) {
//                 case 19723756:
//                     dispatch(changeUpRankingAction(res));
//                     console.log(res);
//                     break;
//                 case 3779629:
//                     dispatch(changeNewRankingAction(res));
//                     console.log(res);
//                     break;
//                 case 2884035:
//                     dispatch(changeOriginRankingAction(res));
//                     console.log(res);
//                     break;
//             }
//         })
//     }
// }

// export const getTopListAction = (idx) => {
//     return dispatch => {
//         getTopList(id).then(res => {
//             switch (id) {
//                 case 0:
//                     dispatch(changeUpRankingAction(res));
//                     break;
//                 case 1:
//                     dispatch(changeNewRankingAction(res));
//                     break;
//                 case 2:
//                     dispatch(changeOriginRankingAction(res));
//                     break;
//                 default:
//             }
//         })
//     }
// }
























