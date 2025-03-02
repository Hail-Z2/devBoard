const taskCompleteEl= document.getElementById('tasksCompleted');
const backgroundColour= document.getElementById('bgColour');
const taskRemainingEl= document.getElementById('taskRemaining');
const buttonsComplete= document.getElementsByClassName('btn-complete');
const activityLog= document.getElementById('activity')


let taskRemaining= 6;
let taskComplete=23;


for(let btn=0; btn<buttonsComplete.length; btn++){
  buttonsComplete[btn].addEventListener('click',function()
    {
      if (buttonsComplete[btn].classList.contains('opacity-50'))
      return;
      

      buttonsComplete[btn].classList.add('opacity-50','cursor-not-allowed');
      buttonsComplete[btn].disabled = true;

      taskRemaining--;
      taskComplete++;

      taskRemainingEl.textContent= taskRemaining;
      taskCompleteEl.textContent= taskComplete;

      const taskName = buttonsComplete[btn].parentElement.parentElement.querySelector("p.font-medium.text-2xl").textContent;
    const timeStamp = new Date().toLocaleString();
    activityLog.innerHTML += `<p>${taskName} completed at ${timeStamp}</p>`;
    
  })

}
