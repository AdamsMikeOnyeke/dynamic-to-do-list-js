// document.addEventListener('DOMContentLoaded', function toDoList(){
//     const addButton= document.getElementById('add-task-btn')
//     const taskInput = document.getElementById('task-input')
//     const taskList = document.getElementById('task-list')

//     function addTask(){
//         const taskText= taskInput.value.trim()
//         if (taskText===''){
//             alert('Please enter a task')
//         }else{
//             const li = document.createElement('li')
//             li.textContent= taskText

//             const button = document.createElement('button')
//             button.textContent= "Remove"
//             button.classList.add('remove-btn')
            
//             button.onclick = function () {
//                 li.remove()
//             }

//             li.appendChild(button)
//             taskList.appendChild(li)

//             taskInput.value=''
//         }
//         localStorage.setItem('tasks',JSON.stringify(tasks))

//     }
//     addButton.addEventListener('click', addTask)
//     taskInput.addEventListener('keypress', function(event){
//         if (event.key==='Enter'){
//             addTask()
//         }
//     })
//     document.addEventListener('DOMContentLoaded', addTask)

//     function loadTasks(){
//         const storedTask= JSON.parse(localStorage.getItem('tasks'))
//         storedTasks.forEach(task => {
//             addTaskToDOM(task.text);
//     }
// })


document.addEventListener('DOMContentLoaded', function toDoList() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
        } else {
            const li = document.createElement('li');
            li.textContent = taskText;

            const button = document.createElement('button');
            button.textContent = 'Remove';
            button.classList.add('remove-btn');
            
            button.onclick = function () {
                removeTask(li, taskText);
            };

            li.appendChild(button);
            taskList.appendChild(li);

            taskInput.value = '';
            
            // Save to localStorage
            saveTaskToLocalStorage(taskText);
        }
    }

    function saveTaskToLocalStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function removeTask(taskElement, taskText) {
        taskElement.remove();
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => {
            addTaskToDOM(taskText);
        });
    }

    function addTaskToDOM(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.classList.add('remove-btn');
        
        button.onclick = function () {
            removeTask(li, taskText);
        };

        li.appendChild(button);
        taskList.appendChild(li);
    }

    // Initial load of tasks
    loadTasks();

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
