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
            //Redirecione para a pagina inicial
            //Substitua o pathname
            window.location.pathname = "/inicio"
        })
    })
}