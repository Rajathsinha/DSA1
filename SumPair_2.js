const arr=[1,2,3,4,5,6,3,3]

  function pairSum(arr){
    
   for(let name of arr ){
      for(let j=1;j<arr.length;j++)
      {
        if(name+arr[j]==6)
        {
           return [name,arr[j]]
        }
      }
   }

  }

  const res=pairSum(arr)

  console.log(res)