import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                }}
            >
                <Text>Welcome to Sample React Application by Arshan Khanifar!</Text>
                <Button
                    onPress={() => {
                        alert("hello");
                    }}
                    title="press me to say hehhloo"
                />
            </View>
        )
    }
}

export default HomeScreen;
