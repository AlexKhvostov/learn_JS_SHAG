const tbody = document.body.querySelector('tbody');
const form = document.forms[0];
const table = document.body.querySelector('table');

function loadTask(){
    fetch(`http://localhost:3000/tasks`)
        .then((response) => response.json())
        .then((json) =>
        {
            tbody.innerHTML = "";
            console.log(json);
            json.forEach(task=>{
               const tr              = document.createElement('tr');
               const taskID          = document.createElement('th');
               const taskName        = document.createElement('th');
               const taskIsCompleted = document.createElement('th');
               const taskPriority    = document.createElement('th');
               const taskDel    = document.createElement('th');
                //<button type="button" className="btn btn-danger btn-sm">Danger</button>
                const btnDel = document.createElement('button');
                btnDel.className ="btn btn-danger";
                btnDel.textContent="Del";
                btnDel.type = "button";
                btnDel.dataset.taskId = task.id;
                taskDel.append(btnDel);

                taskID.textContent          = task.id;
                taskName.textContent        = task.text;
                taskIsCompleted.textContent = task.isCompleted;
                taskPriority.textContent    = task.priority;

                tr.append(taskID);
                tr.append(taskName);
                tr.append(taskIsCompleted);
                tr.append(taskPriority);
                tr.append(taskDel);

                tbody.append(tr);
            });
        });
}

form.addEventListener('submit', pushTask);

table.addEventListener('click', del);


function pushTask(event){
    event.preventDefault();

    const newTaskName = document.body.querySelector("#taskName");
    const newTaskIsCompleted = document.body.querySelector("#isCompleted");
    const mewTaskPriority = document.body.querySelector("#priority");
    const result ={};

    result.text = newTaskName.value;
    result.isCompleted = newTaskIsCompleted.checked;
    result.priority = mewTaskPriority.value;

    console.log(result);
    console.dir(result);
    fetch('http://localhost:3000/tasks/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            // todo описать действие с ответом
            loadTask();
        });

}

function del(event){
    console.dir(event);
    if(event.target.tagName=="BUTTON"){
        console.dir(event.target.dataset.taskId);
        const result = { "id" : `${Number.parseInt(event.target.dataset.taskId)}`};
        console.log(result);

        fetch('http://localhost:3000/tasks/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // todo описать действие с ответом
                //  loadTask();

                event.target.closest('tr').before("");
                console.log(event.target.closest('tr'));
            });
    }

}

loadTask();

// <tr>
//     <th scope="col">№</th>
//     <th scope="col">Название</th>
//     <th scope="col">Приоритет</th>
//     <th scope="col">готова</th>
// </tr>