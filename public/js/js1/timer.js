
    // var timeleft = 5;
    // var downloadTimer = setInterval(function(){
    // timeleft--;
    // document.getElementById("countdowntimer").textContent = timeleft;
    // if(timeleft <= 0)
    //      alert("Time is over");
    //     document.getElementById("next").onclick = function() {
    //         alert("Time is over")
            
    //     }
    //     function myfunction() {
    //         document.getElementById("next").onclick =;
    //     }
       
    // },1000);

    let dt = new Date(new Date().setTime(0));
    let time = dt.getTime();
    let seconds = Math.floor((time % (100 * 60))/ 1000);
    let  minutes = Math.floor((time % (1000 * 60 * 60))/ (1000 * 60));

    let timex = 0;
    let mytime = setInterval(function() {
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
        document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000)
