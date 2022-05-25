
const fs = require('fs');
const bioData = {

    name: "Dnyaneshwar",
    age : 19,
    channel: "Edu Create UPDATED",

};


// जब  हमे object को json  मे  convert  करना  हो तब  हम stringigy  use  करते  ही 

// const JsonData = JSON.stringify(bioData);
// console.log(JsonData);


// ye nahi kar sakte
// console.log(JsonData.name);

// json to object

// const objData = JSON.parse(JsonData);
// console.log(objData);


const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json" , jsonData, (err) => {

//      console.log("Successful");
// })

fs.readFile("json1.json" ,"utf-8" , (err ,data) =>{

    //  console.log(data);

    const orgData = JSON.parse(data);
    console.log(orgData);

    console.log(data);
} )

