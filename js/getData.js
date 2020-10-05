// Obetenemos la Api por medio de promesas en javascript
/*
 *fetch() esto es nuevo en javascript
 *permite controlar errores mas facilmente
 *trabaja por medio de protocola http o htpps y se basa en promesas
 *sistema de peticiones y respuestas
 */

//URl de la API en una varible
const API = "https://rickandmortyapi.com/api/character";
//obtener el retorno de la API
const getData = (api) => {
    /*se pone api y no API porque es un parametro a recibir y no la constante, api puede ser cualquier cosa, se pone como estandar de buenas practicas*/
    return fetch(api) //saca toda a info de la api, fetch funciona por medio de promesas
        .then((response) => response.json()) //la respuesta se pide en formato json o xml-- en response puede ir resolve o response por buenas parcticas, pero teoricamente pude ir cualquier cosa, desde que las dos palabras sean iguales
        .then((json) => {
            llenarDatos(json), paginacion(json.info);//aca va la constante que se usara mas adelante para que reciba los datos json y los llene en html o en el caso de paginacion el jason .info para que solo busque en esa parte
        })
        .catch((error) => { //siempre va en catch para ver si hay error
            console.log("Error", error);
        });
};


//lenar datos en nuestra pagina

const llenarDatos = (data) => { // se nombre data como quiera, la gracias es que llame al json de arriba
    let html = ""; // html es una variable vacia que va a recibir los datos y a imprimirlos en el html, en unos card, esta puede variar 
    data.results.forEach((pj) => { //() recibe un nombre de lo que queramos diferente a data, la idea es que los datos saldran de data y se pasaran a este parametro
        html += '<div class="col">'; //el += concatena y respeta el anterior, seria lo mismo que html = html + '';
        html += '<div class="card border-dark text-white bg-dark mb-3" style="width: 10rem;">'; // se saca de bootstrap
        html += `<img src="${pj.image}" class="card-img-top">`; // estas comillas se usan para sacar valores de json o xml, se sacan con alt +96, se saca con el ${la variable.lo que busco}
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">estatus: ${pj.status}</p>`;
        html += `<p class="card-text">especie: ${pj.species}</p>`;
        html += `<p class="card-text">genero: ${pj.gender}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    //imprimir datos en html
    document.getElementById("datosPersonajes").innerHTML = html;
};

//paginacion, debe ir de segundas porque lee por orden y no puede sacar paginas si no hay nada
const paginacion = (data)=> { //el next y el prev estan en el info, el data es un nombre generico, puede ser cualquiera

 //para desabilitar los prev y next que no tienen nada despues para evitar el null

let prevDisable = "";
let nextDisable = "";

/*
if (data.prev == null) {
    prevDisable = "disabled";
} else {
    prevDisable = "";
}

if (data.next == null) {
    nextDisable = "disabled";
} else {
    nextDisable = "";
}*/
//funciona pero es largo


if (data.next == null) nextDisable= "disabled";
if (data.prev == null) prevDisable= "disabled";
//mas corto, como ya tiene la variable tiene el "" vacio entonces no es necesario colocarle el else

//genera el codigo en el html, el ${}puede llevar variables como las de arriba
let html = "";
html += `<li class="page-item ${prevDisable}"><a class="page-link"  onclick="getData('${data.prev}')">Previous</a></li>`;
html += ` <li class="page-item ${nextDisable}"><a class="page-link"  onclick="getData('${data.next}')">Next</a></li>`;
document.getElementById("paginacion").innerHTML = html;
}


//activo o invoco la funcion
getData(API); /*se pide la API*/

//operadores ternarios