const fs = require('fs')
const states = require('../assets/main/states');
const rainfall = require('../assets/rainfall.json') 
// let  test = require('../assets/test1.json') 
//state list

states.map((state)=>{
  let distList = []
  rainfall.map((data)=>{
    if(data.STATE_UT_NAME == state)
      distList.push(data.DISTRICT)
 })
 console.log(distList)
})

// distList = new Set(stateList)

// console.log(stateList)
// let newstateList =  Array.from(stateList)
console.log(distList,'\n')

// let i =0 
// rainfall.map((data) => {
//     for(i =0 ; i < newstateList.length ;i++)
//           if(data.STATE_UT_NAME == newstateList[i])
//           {
//             let obj = { "district" : data.DISTRICT,
//             "JAN" : data.JAN,
//             "FEB" : data.FEB,
//             "MAR" : data.MAR,
//             "APR" : data.APR,
//             "MAY" : data.MAY,
//             "JUL" : data.JUL,
//             "AUG" : data.AUG,
//             "SEP" : data.SEP,
//             "OCT" : data.OCT,
//             "NOV" : data.NOV,
//             "DEC" : data.DEC
//                     }
//               test[i][newstateList[i]].push(obj)
//           }
            
//         })  
          
// let x = JSON.stringify(test)
// fs.writeFileSync('test2.json',x,(err)=>{
//              if(err){
//                 console.log(err)
//              }
//     })
// let stateList = []

// rainfall.map((data)=>{
//      stateList.push(data.STATE_UT_NAME)
// })
// stateList = new Set(stateList)

// console.log(stateList)
// let newstateList =  Array.from(stateList)

// let c = ''
// newstateList.map((data)=>{
//       c = c +  `{"${data}" : [] },\n`
// })

// fs.writeFileSync('test2.json',c,(err)=>{
//          if(err){
//             console.log(err)
//          }
// })


