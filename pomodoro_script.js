const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');




form.addEventListener('submit', e => {
    e.preventDefault();
    if(itTask.value != ''){
        console.log(itTask.value)
        createTask(itTask.value);
        itTask.value = '';
        renderTasks();
    }
})


function createTask (value){
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed:false
    }
    tasks.unshift(newTask);
}


function renderTasks() {
    const html = tasks.map( task => {
        return `
        <div class="task">
        <div class="completed"> ${task.completed ? `<span class="done"></span>`:`<button class="star-btn"data-id="${task.id}">Star</button>`} </div>
        <div class="title">${task.title}</div>
        </div>
        `;
        }
    )
    

    const taskContainer = document.querySelector('#tasks');
    
    taskContainer.innerHTML = html.join('');
}




