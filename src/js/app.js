const solicitud = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json')
.then(function(response){
  return response.json();
})

.then(function(myJson){
  console.log(myJson);
});


console.log(count);
const block = document.createElement('div');
block.className = "block";
root.appendChild(block);

 