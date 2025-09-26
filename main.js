const API_USER_URL = "https://jsonplaceholder.typicode.com/users";

const retorno = fetch(API_USER_URL);

retorno
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });

console.log(retorno);

