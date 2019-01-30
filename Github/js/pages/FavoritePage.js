/**
 * FavoritePage.js
 *
 * Created by 姜守栋 on 2019/1/30.
 * Copyright © 2018年 jiangshoudong. All rights reserved.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

export default class FavoritePage extends Component {


    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.home}>FavoritePage</Text>
                <Button
                    title='change Theme Color'
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'green',
                                updateTime: new Date().getTime(),
                            }
                        })
                    }}
                />
            </View>
        );
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