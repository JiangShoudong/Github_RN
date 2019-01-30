/**
 * index.js
 *
 * Created by 姜守栋 on 2019/1/30.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import {combineReducers} from 'redux';
import theme from './theme';
import {rootCom, RootNavigator} from '../navigator/AppNavigator';

/**
 * 1、指定默认的state
 */
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 2、创建自己的navigation reducer
 * @param state
 * @param action
 * @returns {*}
 */
const navReducer = (state = navState, action) => {

    const nextState = RootNavigator.router.getStateForAction(action, state);

    return nextState || state;
};

/**
 * 3、合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
    nav: navReducer,
    theme: theme,
});

export default index;



