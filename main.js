const fs = require("fs")

const file = fs.readFile("test.txt","utf8",(err,data)=>{
console.log(data)

})

function Csr(path){
const files = fs.existsSync(path)
if(files) {
  console.log(`File ${path} is exists`)
 }else{
  
}
}
