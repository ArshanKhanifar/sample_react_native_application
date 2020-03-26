import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {UDPClient} from "../../src/networking/udp_client";


export default class UDPClientDemo extends React.Component {
    PORT = 5555;
    constructor() {
        super();
        this.state = {
            messages: [],
        };
    }

    componentDidMount(): void {
        this.udp_client = new UDPClient(this.PORT);
        this.udp_client.connect().listen_broadcast();
        this.messages = [];
    }

    udpMessageCallback(content) {
        this.messages.push({
            message: content,
            key: this.messages.length + '',
        });
        this.setState({
            messages: this.messages,
        });
    }

    start_listening_pressed() {
        this.udp_client.start_listening(data => {
            this.udpMessageCallback(data);
        });
    }

    stop_listening_pressed() {
        this.udp_client.stop_listening();
    }

    render() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    top: 20,
                }}>
                <Button
                    title={'Start Hiiii Listening'}
                    onPress={() => {
                        this.start_listening_pressed();
                    }}
                />
                <Button
                    title={'Stop Listening'}
                    onPress={() => {
                        this.stop_listening_pressed();
                    }}
                />
                <FlatList
                    data={this.state.messages}
                    renderItem={({item}) => <Text>{item.message}</Text>}
                />
            </View>
        );
    }
}
