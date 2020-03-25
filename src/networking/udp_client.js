import dgram from 'react-native-udp';

class UDPClient {
  constructor(port) {
    this.socket = null;
    this.port = port;
    this.callback = null;
  }

  connect() {
    this.socket = dgram.createSocket('udp4');
    return this;
  }

  listen_broadcast() {
    this.socket.on('listening', () => {
      const address = this.socket.address();
      console.log(
        'UDP Server listening on ' + address.address + ':' + address.port,
      );
    });

    this.socket.on('message', (data, info) => {
      var str = String.fromCharCode.apply(null, new Uint8Array(data));
      if (this.callback) {
        this.callback(str);
      }
    });

    this.socket.bind(this.port, '');
    return this;
  }

  start_listening(callback) {
    this.callback = callback;
  }

  stop_listening() {
    this.callback = null;
  }
}

export {UDPClient};
