const API = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=00";//este tiene la paginacion
const getData = (api) => {
  
    return fetch(api) 
        .then((response) => response.json())
        .then((json) => {
            datos(json); paginacion(json);
        })
        .catch((error) => {
            console.log("Error", error);
        });
};

/*
const datos = (data) => {
    let html = ""; 
    data.results.forEach((pokemon) => { 
        html += '<div class="card mb-3" style="max-width: 540px;">';
        html += '<div class="row no-gutters">';
        html += '<div class="col-md-4">';        
        html += `<img src="${pokemon.front_default}" class="card-img">`;
        html += '</div>';
        html += '<div class="col-md-8">'
        html += '<div class="card-body">';
        html += `<h4 class="card-title">${pokemon.name}</h4>`;
        html += `<p class="card-text">estatus: ${pokemon.type}</p>`;
        html += `<p class="card-text">especie: ${pokemon.ability}</p>`;
        html += `<p class="card-text">genero: ${pokemon.ability}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
  
    document.getElementById("datosPokemon").innerHTML = html;
};

const datos = (data) => { 
    let html = ""; 
    //data.results.forEach((pokemon) => { 
        html += '<div class="col">';
        html += '<div class="card border-dark text-white bg-dark mb-3" style="width: 10rem;">'; 
        html += `<img src="${pokemon.sprites['front_default']}" class="card-img-top">`; 
        html += '<div class="card-body">';
        html += `<h4 class="card-title">${pokemon.name}</h4>`;
       //html += `<p class="card-text">Tipo: ${pokemon.types.type.name}</p>`;
       // html += `<p class="card-text">Peso(kg): ${pokemon.weight}</p>`;
       // html += `<p class="card-text">Abilidades: ${pokemon.abilities}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    //});
    document.getElementById("datosPokemon").innerHTML = html;
};*/





const datos = (data) => {    
    let html = "";
    document.getElementById("datosPokemon").innerHTML = html;
    data.results.forEach((poke) => {
        const pokeURL = poke.url;
        return fetch(pokeURL)
            .then((response) => response.json())
            .then((json) => {
                llenarHTML(json,html);                
            })
            .catch((error) => {
                console.log("Error :", error);
            });
    });
};

let llenarHTML=(data,html)=>{  
   
    
    html += '<div class="card m-3 border-dark text-white bg-dark justify-centre" style="max-width: 540px;">';
    html += '<div class="row no-gutters">';
    html += '<div class="col-md-4">';        
    html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img">`;
    html += '</div>';
    html += '<div class="col-md-8">'
    html += '<div class="card-body">';
    html += `<h4 class="card-title">${data.name}</h4>`;
    html += `<p class="card-text">Altura: ${data.height}</p>`;
    html += `<p class="card-text">Numero: ${data.id}</p>`;
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<br>'



    document.getElementById("datosPokemon").innerHTML += html;
}
/*
const paginacion = (info) => {
    let prevDisabled = "";
    let nextDisabled = "";

    if (info.previous == null) {
        prevDisabled = "disabled";
    } else {
        prevDisabled = "";
    }

    if (info.next == null) {
        nextDisabled = "disabled";
    } else {
        nextDisabled = "";
    }

    let html = "";
    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${info.previous}')">Previous</a></li>`;
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML = html;
};*/

const paginacion = (info) => {
    let html = "";
    html += `<li class="page-item ${info.previous ? "" : "disabled"}"><a class="page-link" onclick="getData('${info.previous}')">Previous</a></li>`;//el xxxxx ? "" : "disabled" es un operador ternario
    html += `<li class="page-item ${info.next ? "" : "disabled"}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML = html;
}

getData(API);