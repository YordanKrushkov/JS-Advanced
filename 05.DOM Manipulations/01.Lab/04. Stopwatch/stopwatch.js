function stopwatch() {
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let time = document.getElementById('time');


    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stopwatch);


    function start(e) {

        time.textContent = '00:00'
        stopButton.removeAttribute('disabled');
        e.currentTarget.setAttribute('disabled', true);
        
        counting = setInterval(() => {
            let currentTime = time.textContent;
            let [minutes, secundes] = currentTime.split(':');

            secundes++;
            if (secundes > 59) {
                secundes = 0;
                minutes++;
            }
            time.textContent = `${minutes.toString().padStart(2, '0')}:${secundes.toString().padStart(2, '0')}`
        }, 1000);


    }

    function stopwatch(e) {
        clearInterval(counting);
        startButton.removeAttribute('disabled');
        e.currentTarget.setAttribute('disabled', true);
    }

}