document.addEventListener('DOMContentLoaded', function toDoList(){
    const addButton= document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    function addTask(){
        const taskText= taskInput.value.trim()
        if (taskText===''){
            alert('Please enter a task')
        }else{
            const li = document.createElement('li')
            li.textContent= taskText

            const button = document.createElement('button')
            button.textContent= "Remove"
            button.classList.add('remove-btn')
            
            button.onclick = function () {
                li.remove()
            }

            li.appendChild(button)
            taskList.appendChild(li)

            taskInput.value=''
        }

    }
    addButton.addEventListener('click', addTask)
    taskInput.addEventListener('keypress', function(event){
        if (event.key==='Enter'){
            addTask()
        }
    })
    document.addEventListener('DOMContentLoaded', addTask)
})