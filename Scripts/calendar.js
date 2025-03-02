function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const present= new Date();
  const day =days[present.getDate()];
  const date= present.getDate();
  const month= months[present.getMonth()];
  const year = present.getFullYear();

  document.getElementById('day').innerHTML=day
  document.getElementById('month').innerHTML=`${date} ${month} ${year}`;

} 

Calendar();

