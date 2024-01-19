//zero=-4,4

function sumPairZero(arr){
    
    let left=0;
    let right=arr.length-1
    while(left<right)
    {
        sum= arr[left]+arr[right]
        if(sum===0){
            return [arr[left],arr[right]]
        }
        else if(sum>0){
            
            right--;}
            else{
                left++
            }
            
        }
        
    }
const  arr=[-5,-4,3,4,6,7]
console.log(sumPairZero(arr))