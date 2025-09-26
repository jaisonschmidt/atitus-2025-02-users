const API_USER_URL = "https://jsonplaceholder.typicode.com/users";

const divDados = document.querySelector("#dados");

const retorno = fetch(API_USER_URL);

function getUserData(id) {
    console.log("Dados do usuario", id);
}

retorno
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let html = "";
        
        data.forEach(usuario => {
            html += "<a href='#' onclick='getUserData(" + usuario.id + ")'>" + usuario.name + " - " + usuario.email + "</a><br>";
        });

        divDados.innerHTML = html;
    })
    .catch(function(){
        divDados.innerHTML = "Erro ao buscar os dados";
    });

console.log(retorno);

