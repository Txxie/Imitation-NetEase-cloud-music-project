import React, { memo, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import HJWTopRanking from './c-cpns/top-tanking';
import HJWRankingHeader from './c-cpns/ranking-header';
import HJWRankingList from './c-cpns/ranking-list';
import HJWName from '../../../../components/name';
import HJWId from '../../../../components/id';
import {
    RankingWrapper,
    RankingLeft,
    RankingRight,
} from "./style";

const HJWRanking = memo(() => {
    // redux
    const dispatch = useDispatch();

    // hooks
    useEffect(() => {
        dispatch(getTops());
    }, [dispatch]);

    return (
        <RankingWrapper className="wrap-v2">
            <RankingLeft>
                <HJWName />
                <HJWId />
                <HJWTopRanking />
            </RankingLeft>
            <RankingRight>
                <HJWRankingHeader />
                <HJWRankingList />
            </RankingRight>
        </RankingWrapper>
    )
})

export default HJWRanking;