function timeCount() {
    const countDownTimer = new Date("Apr 29 2022  00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownTimer - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var timer = `${hours}:${minutes}:${seconds}`;
    return timer;
}




export { timeCount }