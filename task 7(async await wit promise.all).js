console.log('person 1:shows ticket');
console.log('person 2:shows ticket');

const WifeGettingTicket=function (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('person 3:shows Ticket');
      console.log('husband:we should go now')
      console.log('wife: no i am humgry')
      const error=false;
      if(!error)
      {
         resolve();
      }
      else{
         reject('error');
      }
     },2000)
    });
}
//WifeGettingTicket().then(Popcorn).then(Butter);

const  Popcorn=function(){
    return new Promise((resolve,reject)=>{
     console.log('husband:brings Popcorn');
     console.log('wife:i need some butter for pocorn');
     console.log('husband:ok let me bring it')
      const error=false;
      if(!error)
      {
         resolve();
      }
      else{
         reject('error');
      }
    });
}

const Butter=function (){
    return new Promise((resolve,reject)=>{
     console.log('husband:brings butter');
     
      const error=false;
      if(!error)
      {
         resolve();
      }
      else{
         reject('error');
      }
    });
}

const coldDrinks = function(){
   return new Promise((resolve,reject)=>{
      
console.log('husband:brings cold drink');
    
     const error=false;
     if(!error)
     {
        resolve();
     }
     else{
        reject('error');
     }
   
   });
    
}

async function init()
{
    await  Promise.all([Popcorn(),Butter(),coldDrinks()]);
    WifeGettingTicket();
    
}
init();


console.log('person 4:shows ticket');
console.log('person 5:shows ticket');