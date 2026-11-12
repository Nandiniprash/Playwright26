

//export let randomNum=Math.floor(Math.random()*1000)

export function randomNumber(a:number){
    if(a==2){
       return Math.floor(Math.random()*100)
    }
    else if(a==3){
       return Math.floor(Math.random()*1000)
    }
    else if(a==4){
       return Math.floor(Math.random()*10000)
    }
}

export let randomEmail=`nandy${Math.floor(Math.random()*1000)}@gmail.com`
console.log(randomEmail);


export let randomUsername=`nandy${Math.floor(Math.random()*1000)}`
