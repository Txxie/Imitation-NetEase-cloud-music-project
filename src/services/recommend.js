// recommend里发送的网络请求
import request from './request';

// getTopBanners是发送网络请求的函数
export function getTopBanners() {
    return request({
        url: "/banner"
    })
}

export function getHotRecommends(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

export function getNewAlbums(limit) {
    return request({
        url: "/top/album",
        params: {
            limit
        }
    })
}

export function getArtistList(area, type, initial) {
    let url = "/artist/list";
    let params = { limit: 100 }
    if (area === -1 && type === 1) {
        url = "/top/artists"
    } else {
        if (area === -1) {
            params = { limit: 10, cat: 5001 }
        } else {
            params = {
                type,
                area,
                initial,
                limit: 10
            }
        }
    }
    return request({
        url,
        params
    })
}
// export function getTopList(idx) {
//     return request({
//         url: "/toplist",
//         params: {
//             idx
//         }
//     })
// }

// export function getTopList(id) {
//     switch (id) {
//         case 19723756:
//             return request({
//                 url: "/playlist/detail?id=19723756"
//             });
//         case 3779629:
//             return request({
//                 url: "/playlist/detail?id=3779629"
//             });
//         case 2884035:
//             return request({
//                 url: "/playlist/detail?id=2884035"
//             });
//         default:
//     }
// }

export function getUpList() {
    return request({
        url: "/playlist/detail?id=19723756"
    })
}
export function getNewList() {
    return request({
        url: "/playlist/detail?id=3779629"
    })
}
export function getOriginList() {
    return request({
        url: "/playlist/detail?id=2884035"
    })
}