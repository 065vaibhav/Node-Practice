///////////find the largest string from array///////////////////////////
function myFunction(a){
  var valu =a.sort(function(a,b){
    return b.length-a.length;
  })
  return valu[0]
}

myFunction(['Irrrrrrrrrrrrrrrrr', 'needyyy', 'candy'])

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
//   return newArr;

// myFunction([7,2,1,6,3,4,5,8,9,10,11,12,13],5)

