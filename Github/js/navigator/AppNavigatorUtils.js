/**
 * AppNavigatorUtils.js
 *
 * Created by 姜守栋 on 2019/1/29.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

export default class NavigationUtil {


    /**
     * 返回到上一页
     * @param navigation
     */
    static pop({navigation}) {
        navigation.goBack();
    }

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }

}
