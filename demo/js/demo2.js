let a=20
const b=30

var fn2=()=>{
    console.log(a+b)
}

async function fn2(){
    var p1=await new Promise(function(resolve,reject){
        resolve("hello")
    })
}