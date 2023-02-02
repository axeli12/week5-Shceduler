var hour = 8
var currentTime = $("#currentDay");
var currentHour = dayjs().hour();



// adding date to header

var currentDate = dayjs().format("dddd, MMMM D ");
currentTime.append(currentDate);


function itTime (){
for (let i = 0; i < 8; i++) {
  var  times = document.getElementById("tb"+i)

  if (hour < currentHour){
    times.classList.add("past")
  }
  
}
};



