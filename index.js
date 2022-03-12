function removeDuplicate(arr){
  return arr.filter((newA,index)=>arr.indexOf(newA) === index);
}

function myFunction(arr){
  return removeDuplicate(arr).sort((a,b)=>a-b);
}

console.log(myFunction([55,6,41,96,21,83,21]))
