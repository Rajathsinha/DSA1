function userName(email){
 const indexAt = email.indexOf('@')
 let res=""
 if(indexAt!== -1)
 {
    for(let i=0;i<indexAt;i++){
        res+=email[i]
       
    }
    return res
 }else{
   return null
 }

}

console.log(userName("rs@gmail.com"))