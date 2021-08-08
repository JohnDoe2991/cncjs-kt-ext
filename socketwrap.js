module.exports = class SocketWrap {
  constructor (socket, port) {
    this.socket = socket
    this.port = port
  }

  sendGcode (gcode) {
    console.log('sending gcode:', gcode)
    this.socket.emit('command', this.port, 'gcode', gcode)
  }

  loadGcode (name, gcode) {
    console.log("load gcode:", gcode)
    this.socket.emit('command', this.port, 'gcode:load', name, gcode)
    console.log("gcode loaded")
  }

  stopGcode (file, gcode) {
    this.socket.emit('command', this.port, 'gcode:stop', { force: true })
  }
}
