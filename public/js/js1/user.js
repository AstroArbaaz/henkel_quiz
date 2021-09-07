let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".time").innerHTML = user_time;

document.getElementsByName("name")[0].value = name;
document.getElementsByName("score")[0].value = points;
document.getElementsByName("time")[0].value = user_time;
