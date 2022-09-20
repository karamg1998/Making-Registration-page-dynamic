//axios globals
axios.defaults.headers.common['X-Auth-Token']=
'dfhgjfjhfywtdhdkfnvbvjfkjghjfdjfb.jrfygjvgefggfvkrygfeeyuuyegufjgjfbjrbg.ggrfyryjfgrfyrgyrgygey';




// GET REQUEST
function getTodos() {
/* axios({
    method:'get',
    url:'https://jsonplaceholder.typicode.com/todos',
    params:{_limit:5}
}) */


    //axios.get('https://jsonplaceholder.typicode.com/todos',{params:{_limit:5}})
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {timeout : 5000})
    .then(res => showOutput(res))
    .catch(err=> console.log(err))
  }
  
  // POST REQUEST
  function addTodo() {
  /*  axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{
        title:'karamveer',
        completed:false
    }
   }) */
   axios.post('https://jsonplaceholder.typicode.com/todos',{title:'karamveer',completed:false})
   .then(res => showOutput(res))
    .catch(err=> console.log(err))
  }
  
  // PUT/PATCH REQUEST/put request completely replace the data but patch request replace only the specified parameter's
  function updateTodo() {
    /* axios.put('https://jsonplaceholder.typicode.com/todos/1',//we have to specify the user id bt /id
    {title:'karamveer',
    completed:false})
   .then(res => showOutput(res))
    .catch(err=> console.log(err)) */

    axios.patch('https://jsonplaceholder.typicode.com/todos/1',//we have to specify the user id bt /id
    {title:'karamveer',
    completed:false})
   .then(res => showOutput(res))
    .catch(err=> console.log(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')//we have to specify the user id bt /id
    .then(res => showOutput(res))
    .catch(err=> console.log(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(axios.spread((todos,posts)=>showOutput(todos)))
    .catch(err=> console.log(err))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config ={
        header:{
            'content type':'application/json',
            authorization:'sometoken'
        }
    };
    axios.post('https://jsonplaceholder.typicode.com/todos',{title:'karamveer',completed:false},config)
   .then(res => showOutput(res))
    .catch(err=> console.log(err))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'hello world'
        },
        transformResponse:axios.transformResponse.concat(data=>{
        data.title=data.title.toUpperCase();
        return data;
        })
    };
    axios(options).then(res => showOutput(res));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todoss'/* ,{
        ValidateStatus: function(status){
            return status < 500; //reject status only if greater or equal to 500
        }
    } */)
    .then(res => showOutput(res))
    .catch(err=> {
        if(err.response){
            //server responded with range other rhan 200
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            
            if(err.response.status===404)
        {
          alert('Page not found');
        }
      }
          else if(err.request)
         {
        console.error(err.request);
         }
         else
         {
        console.error(err.message);
         }
    });
    }
        
  
  
  // CANCEL TOKEN
  function cancelToken() {
    const source = axios.CancelToken.source();
    axios.get('https://jsonplaceholder.typicode.com/todos',{
        cancelToken:source.token
    })
    .then(res => showOutput(res))
    .catch(thrown =>{
        if(axios.isCancel(thrown)){
            console.log('request canceled',thrown.message);
        }
    });
    if(true)
    {
        source.cancel('request canceled!');
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  /* axios.interceptors.request.use(
    config =>{
        console.log(`${config.method.toUpperCaes()} request sent to ${config.url} at ${new Date().getTime()}`);
   
    return config;
    },error => { return Promise.reject(error);
    }
  ); */
 
 
  // AXIOS INSTANCES
  const axiosInstance =  axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
  });
  axiosInstance.get('/comments').then(res => showOutput(res));



  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);