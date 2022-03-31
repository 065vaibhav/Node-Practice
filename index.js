///Hash Tables: Ransom Note//////////////////////////////////////////////
// function checkMagazine(magazine, notes) {  
//   var falseV = 0;
  
//   notes.filter(val=>{
//     console.log("bfore",magazine);
//        var index = magazine.indexOf(val);
//        if (index !== -1) {
//         magazine.splice(index, 1);
//      }else falseV++ 
//     console.log("aftre",magazine);
//  })
//  console.log(falseV===0?  'Yes' : 'No')
// }


// checkMagazine([ 'two', 'times', 'three', 'is', 'not', 'four' ] ,[ 'two', 'times', 'three', 'is', 'four' ])

///////////////////repeat string/////////////////////////////////
// function myfunction(sn,n){
//   // console.log("s",Math.floor(n/s.length));
//   var s = sn.split("");
//   var strSize = s.length;
//   var a = s.filter(z=> z==='a').length
//   var repeat = Math.floor(n/strSize)
//   var left = n -(strSize*repeat)
//   var repeatLeft = s.filter((a,i)=> a==='a' && i<left).length
//   console.log((repeat*a) + repeatLeft)
// }

// myfunction('baaa',15)


//////////////// Print second largest input/////////////////
// const arr = [101, 101, 1, 24, 5, 15 ,25 , 45, 66, 88, 98, 101, 98, 1];

//  function getSecondHighest(arrCheck){
//      var first=0,second=0;
//      for(var i=0;i<arrCheck.length;i++){
//          if(arrCheck[i] > first){
//           second = first;
//           first = arrCheck[i];
//          }
//          else if(arrCheck[i]>second && arrCheck[i]<first){
//              second = arrCheck[i];
//         } 
//      }
//      return second;
// }
	 
//  getSecondHighest(arr)


///////////////////Insert character after every n characters (backwards)/////
// myFunction=(a,b)=>{
//    let result = [];
//    let rest = a;
//    while (rest.length) {
//    	result.push(rest.slice(-3));
//    	rest = rest.slice(0, -3);
//    }
//   console.log(result.reverse().join(b))
// }

// myFunction('1234567','.')

///////////////////increment every character at string/////////////
// myFunction = (a) =>{
//   var x=""
//   for (let i = 0; i < a.length; i++) {
//     x += String.fromCharCode(a.split("")[i].charCodeAt() + 1)
//   }
//   return x
// }
// console.log(myFunction('bgddrd'))

///////////find the largest string from array///////////////////////////
// function myFunction(a){
//   var valu =a.sort(function(a,b){
//     return b.length-a.length;
//   })
//   return valu[0]
// }

// myFunction(['Irrrrrrrrrrrrrrrrr', 'needyyy', 'candy'])

///////////////////Sort of array//////////////////////////////////
// function removeDuplicate(arr){
//   return arr.filter((newA,index)=>arr.indexOf(newA) === index);
// }

// function myFunction(arr){
//   return removeDuplicate(arr).sort((a,b)=>a-b);
// }

// myFunction([55,6,41,96,21,83,21])


/////////////////Get every possible value of nth index from array////////////////

// function myFunction(a,n){
//   var count = n-1
//   var newval='';
//   var newArr = []
//   for (let index = 0; index < Math.floor(a.length/n); index++) {
//     newval =  a[count]
//       newArr.push(newval)
//     count+=n
//   }
//   console.log(newArr) ;
// }
// myFunction([7,2,1,6,3,4,5,8,9,10,11,12,13],5)

