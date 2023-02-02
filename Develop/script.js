var hour = 9;
var currentTime = $("#currentDay");
var currentHour = dayjs().hour();
var saveBtn = $(".saveBtn")
var description = $(".description")



// adding date to header

var currentDate = dayjs().format("dddd, MMMM D ");
currentTime.append(currentDate);


function itTime (){


for (var i = 0; i < 9; i++){
    var getTime = document.getElementById("#block"+i);    

    if (hour < currentHour){
        getTime.classList.add(".past");
    }

    else if (hour == currentHour) {
        getTime.classList.add(".present")
    }

    else
        getTime.classList.add(".future");

    hour++;
}

};
itTime();

function text(event){
  event.preventDefault();

  var des = $(this).siblings(".description").val().trim();

  var savedDes = $(this).parrent().attr("id");

  localStorage.setItem(savedDes, des)

  saveBtn.on("click", text)

  for (let i = 0; i <= 9; i++){
    var data = localStorage.getItem("hour-"+i)
    $("#hour-"+i).children("textarea").val(data)
 
  }
}



