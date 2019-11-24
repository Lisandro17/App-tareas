(function () {
    //VARIABLES INICIALES
    var input = document.getElementById('input');
    var boton = document.getElementById('boton');
    var lista = document.getElementById('lista');




    //FUNCIONES
    function agregartarea() {
        var tarea = input.value;
        var elementoa = document.createElement('a');
        var elementoli = document.createElement('li');
        var contenido = document.createTextNode(tarea);

        if (input.value == "") {
            input.setAttribute('placeholder', 'La lista esta vacia');
            input.className = "error";
            return false;
        }
        elementoa.appendChild(contenido);
        elementoa.setAttribute('href', '#');
        elementoli.appendChild(elementoa);
        lista.appendChild(elementoli);

        input.value = "";
        
        for (i = 0; i <= lista.children.length; i++) {
            lista.children[i].addEventListener('click', function () {
                this.parentNode.removeChild(this);
            });
        }
    }



    function comprobarinput() {
        input.setAttribute('placeholder', 'Agrega tu tarea');
        input.className = "";
    }

    function eliminar() {
        this.parentNode.removeChild(this);
    }





    //EVENTOS
    input.addEventListener('click', comprobarinput);
    boton.addEventListener('click', agregartarea);

    for (i = 0; i <= lista.children.length; i++) {
        lista.children[i].addEventListener('click', eliminar);
    }


}())