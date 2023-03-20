import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import HJWThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';
import HJWTopRanking from '@/components/top-ranking';

const HJWRecommendRanking = memo(() => {
    // redux hooks
    const dispatch = useDispatch();
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"])
    }), shallowEqual);

    // other hooks
    useEffect(() => {
        dispatch(getTopListAction(19723756));
        dispatch(getTopListAction(3779629));
        dispatch(getTopListAction(2884035));
        // dispatch(getUpListAction());
        // dispatch(getNewListAction());
        // dispatch(getOriginListAction());
    }, [dispatch]);

    return (
        <RankingWrapper>
            <HJWThemeHeaderRCM title="榜单" />
            <div className='tops'>
                <HJWTopRanking info={upRanking} />
                <HJWTopRanking info={newRanking} />
                <HJWTopRanking info={originRanking} />
            </div>
        </RankingWrapper>
    )
})

export default HJWRecommendRanking;