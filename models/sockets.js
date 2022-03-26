

class Sockets {

    constructor(io){

        this.io = io;
        this.socketsEvents();

    }

    socketsEvents(){

        this.io.on('connection', (socket) => {
        
            //escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', (data) =>{
                console.log(data);
                //emite a todos los cientes conectados
                this.io.emit('mensaje-from-server', data);
            });
        }
      )}
}

module.exports = Sockets;
