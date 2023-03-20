//这个文件的作用是合并多个reducer
import { combineReducers } from 'redux-immutable';

// as的作用是重命名，为了防止命名冲突
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";

const cReducer = combineReducers({//传入一个对象
    recommend: recommendReducer,
    player: playerReducer,
    ranking: rankingReducer
});

export default cReducer;
