//primise all
var promise1=Promise.resolve('hello world');
var promise2=10;
var promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'hello');

})
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));