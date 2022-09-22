


var save=document.querySelector('.save');

save.addEventListener('click',Run);

function Run(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('pnumber').value;
    
    var myobj={
        Name:name,
        Email:email,
        Phone:phone
        } 

    axios.post('https://crudcrud.com/api/7029cd7edc9e4274a2773c28529dfa2c/users',myobj)
    .then((response)=> {
         console.log(response.data)
        
         showOutput(response.data);
    })
    .catch(err=> {
        document.body.innerHTML=document.body.innerHTML+"<h4>something went wrong</h4>";
        console.log(err)
    })

}


window.addEventListener('DOMContentLoaded', (event) => {
   
    axios.get("https://crudcrud.com/api/7029cd7edc9e4274a2773c28529dfa2c/users")
    .then((response) =>{
        console.log(response.data)

        for(var i=0;i<response.data.length;i++)
        {
            showOutput(response.data[i]);
        }
    })
    .catch(err=> {
        document.body.innerHTML=document.body.innerHTML+"<h4>something went wrong</h4>";
        console.log(err)
    })

}); 


function showOutput(user)
{
           var m=document.querySelector('.data');
    
            var n_element=document.createElement('li');
            n_element.id=user._id;
            var d1=document.createTextNode("=>Name:"+user.Name+"-");
            n_element.appendChild(d1);
        
            var d2=document.createTextNode("Email:"+user.Email+"-");
            n_element.appendChild(d2);
        
            var d3=document.createTextNode("Phone:"+user.Phone+" ");
            n_element.appendChild(d3);
        
            var button=document.createElement('button');
            button.className='delete';
            button.textContent='Delete';
            n_element.appendChild(button);
            
            m.appendChild(n_element);
}

var del=document.querySelector('.data');
del.addEventListener('click',remove);

function remove(e)
{
    
      if(e.target.classList.contains('delete'))
      {
         var li=e.target.parentElement;
         del.removeChild(li);
         
         axios.delete(`https://crudcrud.com/api/7029cd7edc9e4274a2773c28529dfa2c/users/${li.id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }
        
        
        
}