function cutTheSticks(arrV) {
  var sc=[]
  var arr = [...arrV];
  
  for (let j = 0; j < arrV.length; j++) {
    var arr1=[];
    var minV = Math.min(...arr);
    
    if(arr.length==0) break;
    else{
      for (let i = 0; i < arr.length; i++) {
       if(arr[i]-minV>0) arr1.push(arr[i]-minV)
      } 
      
      sc.push(arr.length);
      arr = [...arr1]
    }
  }
  return sc
}
// cutTheSticks([ 5, 4, 4, 2, 2, 8 ])
cutTheSticks([ 1,2,3,4,3,3,2,1 ])
// console.log(cutTheSticks([ 5, 4, 4, 2, 2, 8 ]))