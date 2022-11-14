var capa = document.getElementById("capa");
    
    function addElemento(){
    const input =document.getElementById('input').value;
    var h1 = document.createElement('h1');
    
    h1.innerHTML = texto;

    capa.appendChild(h1);
    
    }