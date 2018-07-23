const block = document.createElement('div');
block.className = "block";

const block2 = document.createElement('div');
block2.className = "block";

const block3 = document.createElement('div');
block3.className = "block";

function initial(){
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
}

initial();
//const button1 = document.createElement('button');
//button1.className = "button1";
//prepend me va a servir para ponerlo en el render los 3 botones puede ser mejor un div para usar prepend una sola vez
//root.prepend(button1);

//declaracion de variables
const bloquebotones = document.createElement('div');
const alltaskbtn = document.createElement('button');
const completedbtn = document.createElement('button');
const activebtn = document.createElement('button');
const input = document.createElement('input');
const submit = document.createElement('button');

const state = {
  tarea:['completado','activo']
};

const render = ({tarea}) =>{
  root.prepend(bloquebotones);
  //innerHTML
  alltaskbtn.innerHTML = "TODOS";
  completedbtn.innerHTML = "COMPLETADOS";
  activebtn.innerHTML = "ACTIVOS";
  submit.innerHTML = "Agregar"
  //classname
  bloquebotones.className = "bloquebotones";
  root.className = "root";
  alltaskbtn.className = "alltaskbtn";
  completedbtn.className = "alltaskbtnmimic";
  activebtn.className = "alltaskbtnmimic";
  input.className = "input";
  submit.className = "submit";
  //append
  bloquebotones.appendChild(alltaskbtn);
  bloquebotones.appendChild(completedbtn);
  bloquebotones.appendChild(activebtn);
  root.appendChild(input);
  root.appendChild(submit);
  
  //bloque
  submit.onclick = () => {
    if(document.getElementsByClassName('input')[0].value != ''){
        const mybloque = document.createElement('div');
        mybloque.className = "block";
        mybloque.innerHTML = document.getElementsByClassName('input')[0].value;
        root.appendChild(mybloque);
    }
  };
  
}

render(state);





 