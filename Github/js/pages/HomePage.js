/**
 * HomePage.js
 *
 * Created by 姜守栋 on 2019/1/29.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    render() {

        return <DynamicTabNavigator/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    home: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});