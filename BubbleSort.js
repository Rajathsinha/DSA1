function sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) 
      {
          if(arr[j]>arr[j+1])
          {
              let temp= arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp
          }
      }
    }
    return arr
  }
  const arr = [2, 1, 4, 5, 6, 9, 8];
  
  console.log(sort(arr));
  