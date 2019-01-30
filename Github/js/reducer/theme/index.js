/**
 * index.js
 *
 * Created by 姜守栋 on 2019/1/30.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import Types from '../../action/types';

const defaultState = {
    theme: 'blue',
};

export default function onAction(state = defaultState, action) {

    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }

}