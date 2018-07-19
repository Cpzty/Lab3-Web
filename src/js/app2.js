const solicitud =fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud
.then(resultado =>  resultado.json())
.then(resultadoJSON => console.log(Object.keys(resultadoJSON).length))
.catch(error => console.log("error", error));

const jlength=Object.keys(solicitud).length;
console.log(jlength);
const block = document.createElement('div');
block.className = "block";
root.appendChild(block);

 