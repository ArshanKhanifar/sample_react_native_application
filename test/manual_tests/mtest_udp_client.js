var udp = require('dgram');

// creating a client socket
var client = udp.createSocket('udp4');

client.on('listening', function () {
  var address = client.address();
  console.log('UDP Server listening on ' + address.address + ":" + address.port);
});


client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

var PORT = 5555;
var HOST = '';

client.bind(PORT, HOST);

setTimeout( () => {
  client.close()
},10000);
