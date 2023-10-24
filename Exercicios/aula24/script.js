const f=new Function("v1,v2","return v1+v2")
console.log(f(10,5));


const f1= function(v1,v2){
    return v1+v2
}
console.log(f(10,5));


const f2=function(...valores){
    let res=0
    for(v of valores){
       res+=v
    }

    return res
}

console.log(f2(10,5,20,35,45,10,92));