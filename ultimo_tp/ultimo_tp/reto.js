/*const esquivo = document.querySelector('#esquivo');

esquivo.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    esquivo.style.setProperty('top', randomY+'%');
    esquivo.style.setProperty('left', randomX+'%');
    esquivo.style.setProperty('transform', `traslate(-${randomX}%.-${randomY}%)`);
});/*/

function MueveElBoton(){
    width = window.innerWidth;
    height = window.innerheight;

    newWidth=(Math.random() * width);
    newHeight=(Math.random() * height);

    document.getElementById('esquivo').style.position = "absolute";
    document.getElementById('esquivo').style.left = newWidth;
    document.getElementById('esquivo').style.top = newHeight;
}n 