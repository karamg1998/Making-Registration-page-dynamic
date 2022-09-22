//var my_name=document.getElementById('name');
//var age=document.getElementById('age');

var submit=document.getElementById('submit');

submit.addEventListener('click',run);



function run(e)
{
    e.preventDefault();
    var main=document.querySelector('main');
    var new_element=document.createElement('div');
    new_element.id='div';
    
    var text1=document.createTextNode("=>Name:"+document.getElementById('name').value+" ");
    new_element.appendChild(text1);
    

    var text2=document.createTextNode("Email:"+document.getElementById('email').value+" ");
    new_element.appendChild(text2);

    var text3=document.createTextNode("Phone:"+document.getElementById('pnumber').value);
    new_element.appendChild(text3);

   var button=document.createElement('button');
   button.className="btn btn-danger btn-sm float-right delete";
   button.textContent="Delete";

   new_element.appendChild(button);

   var button2=document.createElement('button');
   button2.className="btn btn-dark btn-sm float-right edit";
   button2.textContent="Edit";

   new_element.appendChild(button2);
   
    /* var insert=document.querySelector('body .container');
    var insert1=document.querySelector('body main')
   insert.insertBefore(new_element,insert1); */
   
   main.appendChild(new_element);
  
   var myobj={
    Name:document.getElementById('name').value,
    Email:document.getElementById('email').value,
    Phone:document.getElementById('pnumber').value
   } 
   var obj_serialised=JSON.stringify(myobj);
  
  
   localStorage.setItem(document.getElementById('email').value,obj_serialised);
   
}

//to add delete functionality
var del=document.querySelector('.container');

del.addEventListener('click',RemoveItem); 
del.addEventListener('click',editItem);

function RemoveItem(e)
{
    for(var i=0;i<localStorage.length;i++)
    {
        var key=localStorage.key(i);
        if(e.target.classList.contains('delete'))
    {
       
            var li=e.target.parentElement;
            del.removeChild(li);
            localStorage.removeItem(key);
    }
    }
    

}

function editItem(e)
{
    if(e.target.classList.contains('edit'))
    {
       
            var li=e.target.parentElement;
            del.removeChild(li);
            
    }

}