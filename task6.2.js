const posts=[
    {title: 'post one',body: 'this is post one'},
    {title: 'post two',body: 'this is post two'}
]


function getPosts(){
    setTimeout( ()=>{
        let output='';
        posts.forEach((posts, index)=>{
        output+=`<li>${posts.title}</li>`;
       });
     document.body.innerHTML=output;
    },1000);
}



function createPost(post){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     posts.push(post);
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

function updateLastUserActivityTime(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        console.log('Before creating 4th post, user last activity time is',new Date());
        console.log('After creating 4th post >>>>');
        console.log('Posts',posts);
        console.log('User last activity time',new Date().getTime());
        
        
        const error=false;
        if(!error)
        {
           resolve();
        }
        else{
           reject('error');
        }
       },1000)
      });
}

function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.pop();
        console.log('Removing last post')
        console.log('Posts',posts);
        
        const error=false;
        if(!error)
        {
           resolve();
        }
       else{
           reject('Array is empty');
        }
       },1000)
      });
}

createPost({title: 'post three',body: 'this is post three'}).then(updateLastUserActivityTime).then(deletePost);
createPost({title: 'post four',body: 'this is post four'});