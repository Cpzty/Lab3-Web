const block = document.createElement('div');
block.className = "block";

const block2 = document.createElement('div');
block2.className = "block";

const block3 = document.createElement('div');
block3.className = "block";


const solicitud1 =fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud1
.then(resultado =>  resultado.json())
.then(resultadoJSON => block.innerHTML=resultadoJSON[0].title,root.appendChild(block))
.catch(error => console.log("error", error));

const solicitud2 =fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud2
.then(resultado =>  resultado.json())
.then(resultadoJSON => block2.innerHTML=resultadoJSON[1].title,root.appendChild(block2))
.catch(error => console.log("error", error));

const solicitud3 =fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud3
.then(resultado =>  resultado.json())
.then(resultadoJSON => block3.innerHTML=resultadoJSON[2].title,root.appendChild(block3))
.catch(error => console.log("error", error));







 