

const EventEmitter = require("events");

const event =   new EventEmitter();


// event.on('SayMyName' , ()=>{


//     console.log("completed successfully");
// })

// event.on("SayMyName" , () =>{
//     console.log("This is second");
// })

// event.on("SayMyName" , () =>{
//     console.log("This is second");
// })




// event.emit("SayMyName");




event.on("changePage" , (sc, mess) =>{

    console.log(`status code is ${sc} and the page is ${mess}`);
})

event.emit("changePage" , 200 , "ok");
