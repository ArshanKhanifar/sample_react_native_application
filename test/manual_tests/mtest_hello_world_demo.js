import React from 'react';
import {View, Text} from 'react-native';

export default class HelloWorldDemo extends React.Component {
    render() {
        return(
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                <Text style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Hello, world
                </Text>
            </View>
        )
    }
}
