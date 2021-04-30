
function 자동차(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name);
        },3000)
    })
}

async function 자동차리스트(){
    const carName =await 자동차('아반떼'); // Promise Object 안에 있는 carName 값을
    console.log(carName);
    /*
    const carName2 =await 자동차('소나타'); 
    console.log(carName2);
    const carName3 =await 자동차('그랜저'); 
    console.log(carName3);
    */
}

자동차리스트();

function 자동차리스트2(){
    const carName = 자동차('아반떼');
    console.log(carName);
}

let a;
setTimeout(()=>{
    a = 10;
},3000);

console.log(a)

function 자동차(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name)
        },3000)
    })
}
