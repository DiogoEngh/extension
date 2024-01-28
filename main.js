const button = document.getElementById('enter');
//Susbtituir pela url
const urlBase = 'http://localhost:5173'
//Substituir pelo endpoint de login
const endpoint = 'http://localhost:3000/alguma-coisa'
//Substituir payload
const payload = {
    'userName': 'usuario',
    'password': 'senha'
}

button.addEventListener('click', () => {
    handler();
});

const handler = () => {
    const currentUrl = window.location.origin;
    if (currentUrl.includes(urlBase)) {
        handleLogin();
    }
}

const handleLogin = () => {
    fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify(payload)
    }).then(response => {
        response.json().then(info => {
            //Set o accessToken devidamente em sesionStorage ou localStorage
            //Vc terar que saber se salva o token em sessionStorage ou localStorage
            //Vc vai precisar saber qual o chave do par chave valor do token e substituir
            //o accessToken por ele
            //E vc vai precisar substituir o token de info.token pelo nome que vem da api
            //localStorage.setItem('accessToken', info.token);
            //ou
            //sessionStorage.setItem('accessToken', info.token);

            //Redirecione para a pagina inicial
            //Substitua o pathname
            window.location.pathname = "/inicio"
        })
    })
}