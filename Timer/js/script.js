var start;

var addZero = function(num){
    if(num < 10){
        num = '0' + num;
    }
    return num;
}

document.getElementById('start_stop').addEventListener('click', function(){
    start = new Date();

    if(this.innerHTML == 'START'){
        timer_id = setInterval(goTimer, 10);

        this.innerHTML = 'STOP';
        this.classList.remove('btn-primary');
        this.classList.add('btn-danger');
    }else{
        clearInterval(timer_id);
        this.innerHTML = 'START';
        this.classList.remove('btn-danger');
        this.classList.add('btn-primary');
    }
});

var goTimer = function(){
    var now = new Date();
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    var milli = now.getTime() - start.getTime();
    seconds = Math.floor(milli / 1000);
    if(seconds >= 60){
        minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
    }
    if(minutes >= 60){
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    }

    seconds = addZero(seconds);
    minutes = addZero(minutes);
    hours = addZero(hours);

    document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}
