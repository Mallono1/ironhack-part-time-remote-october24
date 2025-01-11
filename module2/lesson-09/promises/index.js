const directions = [
    "Starting point: Ironhack Madrid",
    "➔ Turn right toward P. de la Chopera",
    "← At the roundabout, take the 1st exit onto P. de la Chopera",
    "* Lune Creperie P. de la Chopera 33, Madrid"
  ];
   
   
  function obtainDirections(step) {
    return new Promise (function (resolve, reject) {
      // setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      // }, 2000); 
      
    })
  };
   
   
  obtainDirections(0)
    .then(() => obtainDirections(1) )
    .then(() => obtainDirections(2) )
    .then(() => obtainDiretions(3) )
    .then(() => console.log("You arrived at your destination!") )
    .catch((err) => console.log(err));

// function getDirections(step, callback, errorCallback) {
//     // setTimeout(() => {
//       console.log( directions[step] );
      
//       if (!directions[step]) errorCallback("Instructions not found.");
//       else callback();
//     // }, 2000); 
//   }

//   getDirections(0, () => {
//     getDirections(1, () => {
//       getDirections(2, () => {
//         getDirctions(3, () => {
          
//           console.log("You arrived at your destination!");
//           // getDirections(4, () => {}, (err) => console.log(err) ) ;
//         }, (err) => console.log(err));
//       }, (err) => console.log(err));
//     }, (err) => console.log(err));
//   }, (err) => console.log(err));