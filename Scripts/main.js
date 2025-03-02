const taskCompleteEl= document.getElementById('tasksCompleted');
const backgroundColour= document.getElementById('bgColour');
const taskRemainingEl= document.getElementById('taskRemaining');
const buttonsComplete= document.getElementsByClassName('btn-complete');
const activityLog= document.getElementById('activity');
const clearHistory = document.getElementById('history');



let taskRemaining= 6;
let taskComplete=23;

const colors = [
  "#7A73D1", 
  "#B4EBE6", 
  "#D5C7A3", 
  "#D3E671", 
  "#E53888", 
  "#7D1C4A",
  "#2D336B", 
];

function randomColour(){
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

backgroundColour.addEventListener('click',function(){
  const random=randomColour();
  document.body.style.backgroundColor=random

});


for(let btn=0; btn<buttonsComplete.length; btn++){
  buttonsComplete[btn].addEventListener('click',function()
    {
      if (buttonsComplete[btn].classList.contains('opacity-50'))
        
      return;
      alert("Task has been completed")
      

      buttonsComplete[btn].classList.add('opacity-50','cursor-not-allowed');
      buttonsComplete[btn].disabled = true;

      taskRemaining--;
      taskComplete++;

      taskRemainingEl.innerHTML= taskRemaining;
      taskCompleteEl.innerHTML= taskComplete;

      const taskName = buttonsComplete[btn].parentElement.parentElement.querySelector("p.font-medium.text-2xl").innerHTML;
    const timeStamp = new Date().toLocaleString();
    activityLog.innerHTML += `<p>${taskName} completed at ${timeStamp}</p>`;

    if(taskRemaining===0){
      alert("Tasks have been completed")
    }
    
    
  })

}

clearHistory.addEventListener('click',function(){
  activityLog.innerHTML=""
})

