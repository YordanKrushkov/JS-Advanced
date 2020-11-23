function attachGradientEvents() {

    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', trackColor);

    function trackColor(e) {
        let offset = e.offsetX;
        let width = e.target.clientWidth - 1;
        let percentege = (offset / width) * 100;
        document.getElementById('result').innerHTML = `${Math.trunc(percentege)}%`;
    }

    gradientElement.addEventListener('mouseout', e => {
        document.getElementById('result').innerHTML = '';
    })
}