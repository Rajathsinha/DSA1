function largestfourConsecutive(result, num) {
    if (num > result.length) {
      throw new Error("Num greater than array");
    } else {
      let max = 0;
      for (let i = 0; i < result.length - num + 1;i++ ) {
          let temp=0
        for (let j = 0; j < num; j++) {
          temp += result[j+i];
          console.log(result[i])
          console.log(temp);
        }
        // if(temp>max){
          max=temp
        // }
      }
      return max
    }
  }
  const check= largestfourConsecutive([1, 2, 3, 4, 4, 2, 3, 15], 4);
  console.log(check)