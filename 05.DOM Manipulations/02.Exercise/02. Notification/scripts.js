function notify(message) {
    let notificationElement=document.getElementById('notification');
    
    notificationElement.style.display='block'
    notificationElement.textContent='Something happend!'

    notification= setInterval(()=>{
    notificationElement.style.display='none';
    },2000)
}