const block = document.createElement('div');
block.className = "block";

const solicitud =fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud
.then(resultado =>  resultado.json())
.then(resultadoJSON => block.innerHTML=resultadoJSON[0].title,root.appendChild(block) )

.catch(error => console.log("error", error));





 