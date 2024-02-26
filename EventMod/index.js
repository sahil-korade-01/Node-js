

 const EventEmitter = require("events")

 const event = new EventEmitter()
event.on('checkPage',(s,msg)=>{
    console.log(`status code is ${s} and the page is ${msg}`);

})
 event.emit('checkPage',200,"ok")

