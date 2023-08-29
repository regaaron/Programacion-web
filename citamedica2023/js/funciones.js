function show(){
    datos="";
    datos+="Nombre: "+document.getElementById("nombre").value;
    datos+="\n";

    datos+="Edad: "+document.getElementById("edad").value;
    datos+="\n";

    if(document.getElementById('dama').checked){
        datos+="Sexo: Femenino ";
    }else if(document.getElementById('caballero').checked){
        datos+="Sexo: Masculino";
    }

    datos+="\n";

    datos+="Fecha: "+document.getElementById("fecha").value;

    alert(datos);
}