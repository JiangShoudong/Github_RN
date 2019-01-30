/**
 * index.js
 *
 * Created by 姜守栋 on 2019/1/30.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import Types from '../types';

export function onThemeChange(theme) {

    return {
        type: Types.THEME_CHANGE,
        theme: theme,
    }

}