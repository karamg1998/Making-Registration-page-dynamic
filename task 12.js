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

    axios.post('https://crudcrud.com/api/000e41dc13a14d8bbbeceecfa57c4ef6/MyUsers',myobj)
    .then(res => console.log(res.data))
    .catch(err=> {
        document.body.innerHTML=document.body.innerHTML+"<h4>somethong went wrong</h4>";
        console.log(err)
    })

}


window.addEventListener('DOMContentLoaded', (event) => {
   
    axios.get("https://crudcrud.com/api/000e41dc13a14d8bbbeceecfa57c4ef6/MyUsers")
    .then((response) =>{
        console.log(response.data)

        for(var i=0;i<response.data.length;i++)
        {
            var m=document.querySelector('.data');
    
            var n_element=document.createElement('li');
            
            var d1=document.createTextNode("=>Name:"+response.data[i].Name+"-");
            n_element.appendChild(d1);
        
            var d2=document.createTextNode("Email:"+response.data[i].Email+"-");
            n_element.appendChild(d2);
        
            var d3=document.createTextNode("Phone:"+response.data[i].Phone+" ");
            n_element.appendChild(d3);
        
            
            m.appendChild(n_element);
        }
    })
    .catch(err=> {
        document.body.innerHTML=document.body.innerHTML+"<h4>somethong went wrong</h4>";
        console.log(err)
    })

}); 

