import React from "react";

import HJWDiscover from "../pages/discover";
import HJWFriend from "../pages/friend";
import HJWMine from "../pages/mine";
import { Redirect } from "react-router-dom";
import HJWRecommend from "../pages/discover/c-pages/recommend";
import HJWRanking from "../pages/discover/c-pages/ranking";
import HJWSongs from "../pages/discover/c-pages/songs";
import HJWDjradio from "../pages/discover/c-pages/djradio";
import HJWArtist from "../pages/discover/c-pages/artist";
import HJWAlbum from "../pages/discover/c-pages/album";
import HJWPlayer from "../pages/player";


const routes = [
    // 在配置之前需要有对应的页面（在pages创建对应的页面）
    // 我们需要配置的路由
    {
        path: "/",
        exact: true,
        // component: HJWDiscover
        render: () => (
            <Redirect to="discover" />//redirect重定向

        )
    },
    {
        path: "/discover",
        component: HJWDiscover,
        routes: [
            // <-----------重定向start
            // 一旦来到"/discover"，就重定向到"/discover/recommend"
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            // 重定向end------------>
            {
                path: "/discover/recommend",
                component: HJWRecommend
            },
            {
                path: "/discover/ranking",
                component: HJWRanking
            },
            {
                path: "/discover/songs",
                component: HJWSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: HJWDjradio
            },
            {
                path: "/discover/artist",
                component: HJWArtist
            },
            {
                path: "/discover/album",
                component: HJWAlbum
            },
            {
                path: "/discover/player",
                component: HJWPlayer
            }
        ]
    },
    {
        path: "/mine",
        component: HJWMine
    },
    {
        path: "/friend",
        component: HJWFriend
    }

];
export default routes;