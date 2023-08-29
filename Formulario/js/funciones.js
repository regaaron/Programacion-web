function show(){
    datos="";
    datos+="ciudad: "+document.getElementById("Ciudad").value;
    datos+="\n";

    if(document.getElementById('Hombre').checked){
        datos+="Sexo: Hombre ";
    }else if(document.getElementById('Mujer').checked){
        datos+="Sexo: Mujer";
        
    }else{
            datos+="Sexo: Otro"
    }

    datos+="\n";

    var checkboxes = document.getElementsByName("language");
    var selectedLanguages = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedLanguages.push(checkboxes[i].value);
        }
    }
    console.log(checkboxes.values);
    datos+="Lenguajes: "+selectedLanguages;
    datos+="\n";

    datos+="Nombre: " + document.getElementById("Nombre").value;
    datos+="\n";

    datos+="Apellido: " + document.getElementById("Apellido").value;
    datos+="\n";


    datos+="Fecha: "+document.getElementById("fecha-nacimiento").value;
    datos+="\n";

    datos+="Email: "+document.getElementById("email").value;
    datos+="\n";

    datos+="Edad: " + document.getElementById("edad").value;
    datos+="\n";

    datos+="Trabajo Deseado: " + document.getElementById("job").value;
    datos+="\n";

    datos+="CV: " + document.getElementById("cv").value;
    datos+="\n";

    alert(datos);
}