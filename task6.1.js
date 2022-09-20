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

function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.pop();
        
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

createPost({title: 'post three',body: 'this is post three'});

createPost({title: 'post four',body: 'this is post four'}).then(getPosts).then(deletePost).then(getPosts)
.then(deletePost).then(getPosts).then(deletePost).then(getPosts).then(deletePost)
.then(getPosts).then(deletePost).catch(err => console.log(err));
