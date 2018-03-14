var serialport =require("serialport");
var WebSocketServer = require("ws").Server;

var SerialPort = serialport.SerialPort;
var portName = process.argv[2];

var SERVER_PORT = 8081;
var wss =  new WebSocketServer({port: SERVER_PORT});
var connections = new Array;

var myPort = new SerialPort(portName,{
    baudRate:9600,
    parser:serialport.parsers.readline("\r\n")
});

myPort.on('open', onOpen);
myPort.on('data', onData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function onOpen(){
    console.log("Open Connection");
}

function showPortClose(){
    console.log("port closed.");
}

function showError(error){
    console.log("Serial port error: " + error);
}

var arreglo;
function onData(data){
    var cadena = data;
    arreglo = cadena.split(",");
    console.log(arreglo);
    if(connections.length > 0){
        broadcast(data);
    }
}

wss.on("connection", HandleConnection);

function HandleConnection(client) {
    console.log("New Connection");
    connections.push(client);

    client.on('close', function(){
        console.log("Connection closed");
        var position = connections.indexOf(client);
        connections.splice(position,1);
    });
}

function broadcast(data) {
    for (myConnection in connections){
        connections[myConnection].send(data);
    }
}