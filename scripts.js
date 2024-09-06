let userTasks = [
    {
        "title" : "1",
        "date"  : "10/10/2010",
        "isDone": false
    },
    
    {
        "title" : "2",
        "date"  : "10/10/2010",
        "isDone": false
    
    },

    {
        "title" : "3",
        "date"  : "10/10/2010",
        "isDone": false
    }
]

function displayTasks(){
    document.getElementById('taskStyle').innerHTML = ""
    let index = 0;
    for(let i of userTasks){
        let content = `<div id="taskStyle">
                                <!-- task bar 1 flex -->
                                    <div  style="justify-content: space-between" class="hover:bg-gray-400 hover:shadow-xl  shadow-md  flex flex-row bg-gray-300 border-2 border-black rounded-xl items-center mt-2 ml-2 mr-2">
                                        
                                        <!-- task name and date -->
                                            <div>
                                                <h2 id="taskName" class="font-mono font-bold text-xl pl-2">${userTasks.title}</h2>
                                                <h3 class="font-mono font-bold text-xl pl-2">${userTasks.date}</h3>
                                            </div>
                                        <!-- task name and date -->
    
                                        <!-- buttons for delete, edit and update if done -->
                                            <div style="justify-content: space-between" class="flex items-center w-52 mr-3">
                                                <!-- delete button -->
                                                <div>
                                                    <button onclick="delButton(${index})" style="height: 32px; width: 32px; border-radius: 50%;" class="bg-red-950 flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>
                                                    </button>
                                                </div>
                                                <!-- delete button -->
    
                                                <!-- update button (if task completed) -->
                                                <div>
                                                    <button  style="height: 32px; width: 32px; border-radius: 50%;" class="bg-green-950 flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/></svg>
                                                    </button>
                                                </div>
                                                <!-- update button (if task completed) -->
    
                                                <!-- edit button (change task name and date? idk) -->
                                                <div class="">
                                                    <button onclick="updButton(${index})" style="height: 32px; width: 32px; border-radius: 50%;" class="bg-blue-950 flex justify-center items-center">
                                                        <svg class= xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="white" class="bi bi-pen" viewBox="0 0 16 16">
                                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/></svg>
                                                    </button>
                                                </div>
                                                <!-- edit button (change task name and date? idk) -->
    
                                            </div>
                                        <!-- buttons for delete, edit and update if done -->
    
                                    </div>
                                 <!-- task bar 1 flex -->
                            </div>`
       
             
        document.getElementById('taskStyle').innerHTML += content
        index++
    }
    
    
}

displayTasks()

document.getElementById('plusButton').addEventListener('click', function(){
    let userInput = prompt("Please enter your task name:")
    let now = new Date()
    let userInputDate = now.getDay() + '/' + (now.getMonth()+1) + '/' + now.getFullYear()

    let userInputObject = {
        "title" : userInput,
        "date" : userInputDate,
        "isDone" : false
    }
    userTasks.push(userInputObject)
    displayTasks()
})


    
function delButton(index){
    let task = userTasks[index]
    let isConfirmed = confirm(`Are you sure you want to delete : ${task.title} ? `)
    if(isConfirmed){
        userTasks.splice(index, 1)
        displayTasks()  
    }
}

function updButton(index){
    let newTask = userTasks[index]
    let newUserInput = prompt(`Would you like to edit : ${newTask.title} ?`, newTask.title)
    newTask.title = newUserInput
}
