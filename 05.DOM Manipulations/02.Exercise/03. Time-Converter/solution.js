function attachEventsListeners() {
    function attachEventsListeners() {
        let daysInput=document.getElementById('days');
        let hoursInput=document.getElementById('hours');
        let minutesInput=document.getElementById('minutes');
        let secondsInput=document.getElementById('seconds');
    
        let daysButton=document.getElementById('daysBtn');
        let hoursButton=document.getElementById('hoursBtn');
        let minutesButton=document.getElementById('minutesBtn');
        let secondButton=document.getElementById('secondsBtn');
    
        daysButton.addEventListener('click', ()=>{
            let valueOfinput=Number(daysInput.value);
            let day=valueOfinput/valueOfinput;
            let hours=valueOfinput*24;
            let minutes=valueOfinput*1440;
            let seconds=valueOfinput*86400;
    
            daysInput.value=day;
            hoursInput.value=hours;
            minutesInput.value=minutes;
            secondsInput.value=seconds;
        });
    
        hoursButton.addEventListener('click', ()=>{
            let valueOfinput=Number(hoursInput.value);
            let hours=valueOfinput/1;
            let day=valueOfinput/24;
            let minutes=valueOfinput*60;
            let seconds=valueOfinput*3600;
    
            daysInput.value=day;
            hoursInput.value=hours;
            minutesInput.value=minutes;
            secondsInput.value=seconds;
        });
    
        minutesButton.addEventListener('click', ()=>{
            let valueOfinput=Number(minutesInput.value);
            let hours=valueOfinput/60;
            let day=valueOfinput/1440;
            let minutes=valueOfinput/1;
            let seconds=valueOfinput*60;
    
            daysInput.value=day;
            hoursInput.value=hours;
            minutesInput.value=minutes;
            secondsInput.value=seconds;
        });
    
        secondButton.addEventListener('click', ()=>{
            let valueOfinput=Number(secondsInput.value);
            let hours=valueOfinput/3600;
            let day=valueOfinput/86400;
            let minutes=valueOfinput/60;
            let seconds=valueOfinput/1;
    
            daysInput.value=day;
            hoursInput.value=hours;
            minutesInput.value=minutes;
            secondsInput.value=seconds;
        });
}
}