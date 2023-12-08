"use strict";


const getUsers = (resourse, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(null, JSON.parse(request.response));
      } else {
        callback("Xatolik yuz berdi", null);
      }
    }
  });
  request.open("GET", resourse);
  request.send();
};



// getUsers("data/abdulla.json", (err, data) => {
//   console.log(data);
//   getUsers("data/alisher.json", (err, data) => {
//     console.log(data);
//     getUsers("data/sadulla.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// PROMISE 

// const getData = (resourse) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4) {
//         if (request.status.toString()[0] === "2") {
//           resolve(JSON.parse(request.responseText));
//         } else {
//           reject("404 not Found: ");
//         }
//       }
//     });
//     request.open("GET", resourse);
//     request.send();
//   });
// };



// getData("data/alisher.json")
//   .then((data) => {
//     console.log(data);
//     return getData("data/sadulla.json");
//   })
//   .then((data) => {
//     console.log(data);
//     return getData("data/abdulla.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
