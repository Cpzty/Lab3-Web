const block = document.createElement('div');
block.className = "block";
block.classList.add('activo');
const block2 = document.createElement('div');
block2.className = "block";
block2.classList.add('completado');
const block3 = document.createElement('div');
block3.className = "block";
block3.classList.add('activo');
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
const mybloque = document.createElement('div');
mybloque.innerHTML = "<id ='hola'/>"

let allactivo =1;
let completado =0;

const state = {
  tarea:['completado','activo']
};

const render = ({tarea}) =>{
  //no puede ser constante
  let allblocks =  document.getElementsByClassName('block');

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
  mybloque.className = "block";
  
  mybloque.classList.add('activo');
  //append
  bloquebotones.appendChild(alltaskbtn);
  bloquebotones.appendChild(completedbtn);
  bloquebotones.appendChild(activebtn);
  root.appendChild(input);
  root.appendChild(submit);
  
 
  //bloque
  submit.onclick = () => {
    if(document.getElementsByClassName('input')[0].value != ''){
        const anewblock = mybloque.cloneNode(true);
        anewblock.innerHTML = document.getElementsByClassName('input')[0].value;
        root.appendChild(anewblock);
        if(completado==1){
          anewblock.classList.add('hide');
        }
        input.value = '';
      
       anewblock.onclick = () => {
    if(anewblock.classList.contains('activo')){
      anewblock.classList.remove('activo');
      anewblock.classList.add('completado');
      console.log('activo:' +anewblock.classList.contains('activo'));
      console.log('completado:' +anewblock.classList.contains('completado'));
       if(allactivo!=1){
        anewblock.classList.add('hide');
      }
      
    }
    
    else if(anewblock.classList.contains('completado')){
      anewblock.classList.remove('completado');
      anewblock.classList.add('activo');
      console.log('activo:' +anewblock.classList.contains('activo'));
      console.log('completado:' +anewblock.classList.contains('completado'));
       if(allactivo!=1){
        anewblock.classList.add('hide');
      }
    }     
         
  }
        
    }else{
  window.alert('no hay texto');
}
  };

for(let i =0; i<allblocks.length; i++){
  allblocks[i].onclick = () =>{
    if(allblocks[i].classList.contains('completado')){
      allblocks[i].classList.remove('completado');
      allblocks[i].classList.add('activo');
      console.log('activo:' +allblocks[i].classList.contains('activo'));
      console.log('completado:' +allblocks[i].classList.contains('completado'));
      if(allactivo!=1){
        allblocks[i].classList.add('hide')
      }
    }
    else if(allblocks[i].classList.contains('activo')){
      allblocks[i].classList.remove('activo');
      allblocks[i].classList.add('completado');
      console.log('activo:' +allblocks[i].classList.contains('activo'));
      console.log('completado:' +allblocks[i].classList.contains('completado'));
      if(allactivo!=1){
        allblocks[i].classList.add('hide')
      }
    }
    
  }
};
  
completedbtn.onclick = () => {
  allactivo=0;
  completado=1;
  for(let i =0; i<allblocks.length; i++){
    if(allblocks[i].classList.contains('activo')){
     allblocks[i].classList.add('hide');
    }else{
      allblocks[i].classList.remove('hide');
    }
  }
};

alltaskbtn.onclick = () => {
  for(let i =0; i<allblocks.length; i++){
   allblocks[i].classList.remove('hide');
   allactivo =1;
    completado=0;
  }
};

activebtn.onclick = () => {
  allactivo=0;
  completado=0;
  for(let i =0; i<allblocks.length; i++){
    if(allblocks[i].classList.contains('completado')){
     allblocks[i].classList.add('hide');
    }else{
      allblocks[i].classList.remove('hide');
    }
  }
};
  
window.addEventListener('keyup', function(e){
  if(e.keyCode == 13){
   if(document.getElementsByClassName('input')[0].value != ''){
        const anewblock = mybloque.cloneNode(true);
        anewblock.innerHTML = document.getElementsByClassName('input')[0].value;
        root.appendChild(anewblock);
        if(completado==1){
          anewblock.classList.add('hide');
        }
        input.value = '';
     
     anewblock.onclick = () => {
    if(anewblock.classList.contains('activo')){
      anewblock.classList.remove('activo');
      anewblock.classList.add('completado');
      console.log('activo:' +anewblock.classList.contains('activo'));
      console.log('completado:' +anewblock.classList.contains('completado'));
      if(allactivo!=1){
        anewblock.classList.add('hide');
      }
    }
    
    else if(anewblock.classList.contains('completado')){
      anewblock.classList.remove('completado');
      anewblock.classList.add('activo');
      console.log('activo:' +anewblock.classList.contains('activo'));
      console.log('completado:' +anewblock.classList.contains('completado'));
      if(allactivo!=1){
        anewblock.classList.add('hide');
      }
    }     
         
  }

}else{
  window.alert('no hay texto');
}
    
  }                      
  });  
  
}

render(state);





 