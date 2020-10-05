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
*/
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
};

getData(API);