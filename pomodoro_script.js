const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;


const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');


//este fragmeto esta a la espera de que el botón submit realice un evento para poder 
//desencadenar las funciones siguientes addEventListener('evento', event =>{Funciones})
form.addEventListener('submit', e => {
    //con preventDefault() haces que el formulario realice el "submit" pero no se envie           
    e.preventDefault();

    //Si itTask es diferente de vacio, accede
    if(itTask.value != ''){
        createTask(itTask.value);
        itTask.value = '';
        renderTasks();
    }
})


//Esta función crea el objeto donde se almacenara cada tarea
//recibe el valor almacenado en itTask
function createTask (value){
    
    const newTask = {
        //Lo agrega a el nuevo objeto newTask, dandole un id para rastreo
        id: (Math.random() * 100).toString(36).slice(3),
        //Otorgando el valor de itTask como titulo de tarea
        title: value,
        //Y declarando que aun no esta completada
        completed:false
    }
    //el objeto newTask es almacenado en nuesto arreglo tasks[] en la primera posicion
    //por el metodo unshift()
    tasks.unshift(newTask);
}


//Esta función es la indicada para inyectar en el DOM los datos
function renderTasks() {
    //Se realiza un metodo .map a tasks y se almacena el resultado en una variable
    //Por cada objeto dentro del array returnara en la viaribale html el valor con las etiquteas html
    //y las variables ya incrustadas
    const html = tasks.map( task => {
        return `
        <div class="task">
        <div class="completed"> ${task.completed ? `<span class="done"></span>`:`<button class="star-btn"data-id="${task.id}">Star</button>`} </div>
        <div class="title">${task.title}</div>
        </div>
        `;
        }
    )
    
    //se crea una variable para asignarla a la clase tasks del contenedor donde se incrustara la variable html
    const taskContainer = document.querySelector('#tasks');
    //con el metodo innerHTML le indicaremos que incrustaremos un elemento al DOM
    //agrega el texto guardado en la variable html con etiquetas del dom y separados
    //por el metodo join(separador(puede ser una coma, guion- o espacio ))
    taskContainer.innerHTML = html.join('');
}




