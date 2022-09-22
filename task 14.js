


var save=document.getElementById('save');

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

    axios.post('https://crudcrud.com/api/e51121146bb44f2a929238ecd3780c42/users',myobj)
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
   
    axios.get("https://crudcrud.com/api/e51121146bb44f2a929238ecd3780c42/users")
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
            
            var d1=document.createTextNode(`Name:${user.Name} `);
            n_element.appendChild(d1);
        
            var d2=document.createTextNode(`Email:${user.Email} `);
            n_element.appendChild(d2);
        
            var d3=document.createTextNode(`Phone:${user.Phone} `);
            n_element.appendChild(d3);
        
            var button=document.createElement('button');
            button.className='delete';
            button.textContent='Delete';
            n_element.appendChild(button);

            var e_button=document.createElement('button');
            e_button.className='edit';
            e_button.textContent='Edit';
            n_element.appendChild(e_button);
            
            m.appendChild(n_element);
}

var del=document.querySelector('.data');
del.addEventListener('click',remove);
del.addEventListener('click',edit);

function remove(e)
{
    
      if(e.target.classList.contains('delete'))
      {
         var li=e.target.parentElement;
         del.removeChild(li);
         
         axios.delete(`https://crudcrud.com/api/e51121146bb44f2a929238ecd3780c42/users/${li.id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }
        
}

function edit(e)
{
    
      if(e.target.classList.contains('edit'))
      {
        var li=e.target.parentElement;
        
        axios.get(`https://crudcrud.com/api/e51121146bb44f2a929238ecd3780c42/users/${li.id}`)
        .then((response) =>{
        console.log(response.data)
         retriveUser(response.data);
       })
       .catch(err=> {
        document.body.innerHTML=document.body.innerHTML+"<h4>something went wrong</h4>";
        console.log(err)
       })

        del.removeChild(li);
         
        axios.delete(`https://crudcrud.com/api/e51121146bb44f2a929238ecd3780c42/users/${li.id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
       
      }
      
      function retriveUser(data)
      {
        var n=document.getElementById('name');
        n.value=data.Name;
        var e=document.getElementById('email');
        e.value=data.Email;
        var p=document.getElementById('pnumber');
        p.value=data.Phone;
      }
        
}

