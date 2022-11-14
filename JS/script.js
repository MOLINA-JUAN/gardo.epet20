var capa = document.getElementById("capa");
    
    function addElemento(){
    const input =document.getElementById('input').value;
    const h1 = document.createElement('h1');
    console.log(input);
    h1.innerHTML = texto;

    capa.appendChild(h1);
    
    }