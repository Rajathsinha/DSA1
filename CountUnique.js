const arr=[1,2,3,3,4,4,5,66,77,88]
countUnique(arr)
function countUnique(arr){
    if(arr.length>0){
    let i=0;
    for(let j =1;j<arr.length;j++){
      if(arr[i]!==arr[j]){
          i++;
          arr[i]=arr[j]
      }
    }  return console.log(i+1)
}
}
