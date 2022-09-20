console.log('person 1:shows ticket');
console.log('person 2:shows ticket');

function WifeGettingTicket(){
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
WifeGettingTicket().then(Popcorn).then(Butter).then(ColdDrinks);

function Popcorn(){
    return new Promise((resolve,reject)=>{
     console.log('husband:brings Popcorn');
     console.log('wife:i need some butter for popcorn');
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

function Butter(){
    return new Promise((resolve,reject)=>{
     console.log('husband:brings butter');
     console.log('wife:i need some cold drink also');
     
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

function ColdDrinks(){
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
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');