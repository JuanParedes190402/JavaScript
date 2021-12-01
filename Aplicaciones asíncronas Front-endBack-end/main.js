let IPhtml = document.getElementById('IPhtml');
let arrayRegistros = [];


async function leeRegistros() {

    const respuesta = await fetch("https://rest-api-phja.azurewebsites.net/ipCliente.php");
    const registros = await respuesta.json();

    return registros;
}
async function muestraregistros() {
    try {
        arrayRegistros = await leeRegistros();
    }
    catch (e) {
        console.log("Error generado: " + e)
    }
    console.log(arrayRegistros);
    $hola="";
    IPhtml.innerHTML = `${IPhtml.innerHTML}
    
    <tr>
        <td>${arrayRegistros.Ip}</td>
        <td>${arrayRegistros.Ciudad}</td>
        <td><img src=${arrayRegistros.Codigo}></td>
        <td>

    </tr>
    
    `
   
}
muestraregistros();