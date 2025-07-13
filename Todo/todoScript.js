let form = document.querySelector("form");
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let title = document.querySelector(".title");
let todolist = document.querySelector(".todolist");
let markImpBtn = document.querySelector("#checkbox");

let currentTask = [];


todolist.addEventListener('click', function (e) {
      if(e.target.tagName === "BUTTON"){
            const index = e.target.parentElement.getAttribute('data-index');
            currentTask.splice(index, 1)
            localStorage.setItem('currentTask',JSON.stringify(currentTask))
            
            renderTask();              
      }
});

currentTask = JSON.parse(localStorage.getItem('currentTask'))

function renderTask(){
      
      todolist.innerHTML= "";
      currentTask.forEach((elm,index)=>(
            todolist.innerHTML += `<div data-index=${index} class="flex items-center justify-between bg-zinc-700 p-4 rounded shadow-md">
            <h2 class="text-xl font-semibold mb-1">${elm.title} ${elm.isMarked ? "<span class='text-xs top-0 bg-red-600 rounded-2xl p-1'>Imp</span>" : "" } </h2>
            <button class="mt-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-md cursor-pointer">
            Mark as Completed
            </button>
            </div>`
      ))
      
}

renderTask()

form.addEventListener("submit", function (e) {
      e.preventDefault();
      currentTask.push({title: input.value, desc: textarea.value,isMarked: markImpBtn.checked})
      
      
      localStorage.setItem('currentTask', JSON.stringify(currentTask))
      renderTask()
      input.value = ''
      textarea.value = ''
      markImpBtn.value = 'off'
});
      