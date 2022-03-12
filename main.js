// GET REQUEST
function getTodos() {
  console.log('GET Request');
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(res => showOutput(res)).catch(err =>console.error(err));
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
  axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5",{
      title : 'New to do',
      completed : false
  }).then(res => showOutput(res)).catch(err =>console.error(err));

}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
      title : 'updated do',
      completed : false
  }).then(res => showOutput(res)).catch(err =>console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
  axios.delete("https://jsonplaceholder.typicode.com/todos/1"
  ).then(res => showOutput(res)).catch(err =>console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos"),
    axios.get("https://jsonplaceholder.typicode.com/todos"),
  ]).then(res => {
      console.log(res[0]);
      console.log(res[1]);
      showOutput(res[1]);
  }).catch(err =>console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
  const config = {
      headers : {
          'content-type' : 'application/JSON',
          Authorization : "some token"
            
      }
  }

  axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5",{
      title : 'New to do',
      completed : false
  },config).then(res => showOutput(res)).catch(err =>console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
  axios.get("https://jsonplaceholder.typicode.com/todoss").then(res => showOutput(res)).catch(err =>{
      // server responded other than 200 range
      if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
      }
      // request made but server not responded
      else if(err.request){
          console.log(err.request);
      }
      else{
          console.log(err.message)
      }
  });

}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
  const source = axios.CancelToken.source();

 
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{
      cancelToken:source.token
  })
  .then(res => showOutput(res))
  .catch(thrown =>{
      if(axios.isCancel(thrown)){
          console.log("Request cancel",thrown.message);
      }
  });
  if(true){
      source.cancel("request cancel");
  }

}

// INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use(
    config =>{
        console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}` );
        return config

    },error => {
        return Promise.reject(error);
    }
)

// AXIOS INSTANCES

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