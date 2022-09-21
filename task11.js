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
      
        obj_serialised=JSON.stringify(myobj);
    
  
    axios.post('https://crudcrud.com/api/000e41dc13a14d8bbbeceecfa57c4ef6/MyUsers',myobj)
    .then(res => console.log(res.data))
    .catch(err=> {
        document.body.innerHTML=document.body.innerHTML+"<h4>somethong went wrong</h4>";
        console.log(err)
    })


    localStorage.setItem(document.getElementById('email').value, obj_serialised);

    var main=document.querySelector('.data');
    
    var new_element=document.createElement('li');
    
    var data1=document.createTextNode("=>Name:"+n+"-");
    new_element.appendChild(data1);

    var data2=document.createTextNode("Email:"+e+"-");
    new_element.appendChild(data2);

    var data3=document.createTextNode("Phone:"+p+" ");
    new_element.appendChild(data3);
    
    main.appendChild(new_element)

    
}


window.addEventListener('DOMContentLoaded', (event) => {
   
    for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj_de=JSON.parse(localStorage.getItem(key));
    
    var m=document.querySelector('.data');
    
    var n_element=document.createElement('li');
    
    var d1=document.createTextNode("=>Name:"+obj_de.Name+"-");
    n_element.appendChild(d1);

    var d2=document.createTextNode("Email:"+obj_de.Email+"-");
    n_element.appendChild(d2);

    var d3=document.createTextNode("Phone:"+obj_de.Phone+" ");
    n_element.appendChild(d3);

    
    m.appendChild(n_element)
}
}); 