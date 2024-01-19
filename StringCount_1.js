let arr="AAaaabbcc"

function countSTR(){
let count=1
let result=""

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i-1]===arr[i])
        {
          
           count++
        }
        else{
            result+= arr[i-1]+count;
            count=1
        }
    }
    result+= arr[arr.length-1]+count;
  return result
}

const check=countSTR(arr)
console.log(check)

