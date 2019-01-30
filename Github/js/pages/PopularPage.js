/**
 * PopularPage.js
 *
 * Created by 姜守栋 on 2019/1/30.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation';

import NavigationUtil from "../navigator/AppNavigatorUtils";

export default class PopularPage extends Component {

    constructor(props) {
        super(props);
        this.tabNames = ['iOS', 'Java', 'Android', 'JS', 'PHP', 'React'];
    }

    genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tabs${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item} />,
                navigationOptions: {
                    title: item,
                }

            }
        });
        return tabs;
    }

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this.genTabs(), {
                tabBarOptions: {
                    tabStyles: styles.tabStyles,
                    upperCaseLabel: false,
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#678',
                    },
                    indicatorStyle: styles.indicatorStyle,
                    labelStyle: styles.labelStyle,
                }
            }
        ));
        return (
            <View style={{flex: 1, marginTop: 30}}>
                <TabNavigator/>
            </View>
        );
    }
}

class PopularTab extends Component {

    render() {
        const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation,
                    }, 'DetailPage')
                }}>跳转到详情页</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tabStyles: {
        minWidth: 50,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginHorizontal: 6,
    },
});