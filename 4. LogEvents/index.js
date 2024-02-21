
const EventEmitter = require("events") ;
const LogEvents = require('./LogEvents');
const eventEmitter = new EventEmitter();
eventEmitter.on('log', (msg) => LogEvents(msg))


setTimeout(() => {
       
    eventEmitter.emit('log', 'new uuid and date emmited 😂😂😂');
  }, 2000);

//   const EventEmitter = require ("events")
//   const LogEvents = require ('./LogEvents')
//   const eventEmitter = new EventEmitter()
//   eventEmitter.on()