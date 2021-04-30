
/*
try{
    let a =10;
    let a =30;
    console.log("Hello world");
}catch(e){
    console.log(e);
}
*/

/*
console.log('start1');
setTimeout(()=>{
    console.log('start2');
},3000);
console.log('start3');
*/

//setTimeout([콜백함수],3000)


//function 아반떼(a){}


function go(){
    console.log('go go')
}


const 아반떼 = (a) =>{
    setTimeout(()=>{
        console.log('아반떼 go');
        a();
    },3000);
}

const 소나타 = (a) =>{
    setTimeout(()=>{
        console.log('소나타 go');
        a();
    },1000);
}

const 그랜저 = (a) =>{
    setTimeout(()=>{
        console.log('그랜저 go');
        a();
    },2000);
}

//아반떼();
//소나타(go);
//그랜저(go);

/*
console.log('start');
아반떼(()=>{
    소나타(()=>{
        그랜저(()=>{
            console.log('자동차경주끝!')
        })
    })
})


const pr = new Promise((resolve,reject)=>{

})

{
    state:pending (대기)
    result:undefined
}

{
    state:fulfilled(이행)
    result:" "
}

{
    state:rejected(거부)
    result: " "
}

*/

const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('실패!');
    },3000)
})


pr.then((result)=>{
    console.log(result); //state: fulfilled
}).catch((err)=>{
    console.log(err); //state: reject
})

/*
const 아반떼 = (callback) =>{
    setTimeout(()=>{
        console.log('아반떼 go');
        callback();
    },3000);
}

아반떼();
*/

