/**
 * DynamicTabNavigator.js
 *
 * Created by 姜守栋 on 2019/1/30.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {BottomTabBar,} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import PopularPage from "../pages/PopularPage";
import TrendingPage from "../pages/TrendingPage";
import FavoritePage from "../pages/FavoritePage";
import MyPage from "../pages/MyPage";

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon:({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    color={tintColor}
                />
            )
        },
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon:({tintColor, focused}) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    color={tintColor}
                />
            )
        },
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon:({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    color={tintColor}
                />
            )
        },
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon:({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    color={tintColor}
                />
            )
        },
    },
};

export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    tabNavigator() {
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage,};  // 根据需要定制显示的Tabs
        return createAppContainer(createBottomTabNavigator(TABS, {
            tabBarComponent: TabBarComponent,
        }));
    }

    render() {
        const Tab = this.tabNavigator();
        return <Tab/>;
    }

}

class TabBarComponent extends Component {

    constructor(props) {
        super(props);

        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }

    render() {
        const {routes, index} = this.props.navigation.state;
        if (routes[index].params) {
            const {theme} = routes[index].params;
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor={this.theme.tintColor || this.props.activeTintColor}
            />
        )
    }
}