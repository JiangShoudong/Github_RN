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
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';

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

export const rootCom = 'Init';

export const RootNavigator =  createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    defaultNavigationOptions: {
        header: null,
    },
}));

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);