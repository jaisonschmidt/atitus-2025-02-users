const API_USER_URL = "https://jsonplaceholder.typicode.com/users";

const divDados = document.querySelector("#dados");
const divDadosUsuario = document.querySelector("#dadosUsuario");

const retorno = fetch(API_USER_URL);

async function getUserData(id) {
    console.log("Dados do usuario", id);
    // chamar a url https://jsonplaceholder.typicode.com/users/ID
    // receber os dados
    // exibir os dados na tela
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const dadosUsuario = await response.json();

    let html = "";

    html += "<h1>Detalhes do usuário</h1>";
    html += "Telefone: " + dadosUsuario.phone + "<br />";
    html += "Website: " + dadosUsuario.website + "<br />";
    html += "Endereço: " + dadosUsuario.address.street;

    divDadosUsuario.innerHTML = html;
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

