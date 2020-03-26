import net from 'react-native-tcp';

class TCPClient {
    constructor(ip, port) {
        this.socket = null;
        this.ip = ip;
        this.port = port;
        this.callback = null;
    }

    connect() {
        this.socket = net.Socket();

        this.socket.connect(this.port, this.ip, () => {
            console.log('Connected');
            this.socket.write('Hello, server! Love, Client.');
        });

        this.socket.on('error', (error) => {
            console.error(error)
        });

        this.socket.on('data', (data) => {
            console.log('Received data :' + data);
        });

        this.socket.on('close', () => {
            console.log('Disconnected from server.');
        });
        return this;
    }
}

export {TCPClient};
