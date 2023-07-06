const promise = new Promise( (resolve, reject)=> {
    setTimeout(()=> {
        resolve('huzzq');
    }, 1500);
});

promise.then( (data)=>{
    console.log(data)
})