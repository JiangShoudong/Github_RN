/**
 * AppNavigator.js
 *
 * Created by 姜守栋 on 2019/1/29.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null,
        },
    },
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        },
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            header: null,
        },
    },
});

export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    defaultNavigationOptions: {
        header: null,
    },
}));