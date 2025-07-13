
let dayPlaner = document.querySelector('section');


let Schedule = JSON.parse(localStorage.getItem('Schedule')) || [
      {
            time:"1:00 - 2:00",
            activity:""
      },
      {
            time:"3:00 - 4:00",
            activity:""
      },
      {
            time:"5:00 - 6:00",
            activity:""
      },
      {
            time:"7:00 - 8:00",
            activity:""
      },
      {
            time:"9:00 - 10:00",
            activity:""
      },
      {
            time:"11:00 - 12:00",
            activity:""
      },
      {
            time:"13:00 - 14:00",
            activity:""
      },
      {
            time:"15:00 - 16:00",
            activity:""
      },
      {
            time:"17:00 - 18:00",
            activity:""
      },
      {
            time:"19:00 - 20:00",
            activity:""
      },
      {
            time:"21:00 - 22:00",
            activity:""
      },
      {
            time:"23:00 - 24:00",
            activity:""
      },

]



function renderPlans(){
      dayPlaner.innerHTML = '';

      Schedule.forEach((item,index) => {
            const div = document.createElement('div')
            div.className = ' bg-zinc-800 rounded-lg p-2';

            const label = document.createElement('p');
            label.className = 'text-zinc-400 text-sm';
            label.innerText = item.time;

            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'w-full text-2xl font-semibold p-1 outline-none';
            input.value = item.activity;


            input.addEventListener('input', (e) => {
                  Schedule[index].activity = e.target.value
                  console.log(Schedule)
                  
                  localStorage.setItem('Schedule', JSON.stringify(Schedule))
            })

            div.appendChild(label)
            div.appendChild(input)
            dayPlaner.appendChild(div)
            
      })
}
renderPlans();