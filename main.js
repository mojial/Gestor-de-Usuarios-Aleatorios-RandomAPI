let apiUrl = 'https://randomuser.me/api/';
let image = document.querySelector('img');
let texto1 = document.getElementsByTagName('p')[0];
let nombrePersona = document.getElementsByTagName('p')[1];
nombrePersona.innerHTML = '';

let icono1 = document.getElementsByTagName('img')[1];
let icono2 = document.getElementsByTagName('img')[2];
let icono3 = document.getElementsByTagName('img')[3];
let icono4 = document.getElementsByTagName('img')[4];
let icono5 = document.getElementsByTagName('img')[5];
let icono6 = document.getElementsByTagName('img')[6];

let botonRefrescar = document.createElement('button');
botonRefrescar.innerHTML = 'Refrescar';
botonRefrescar.addEventListener('click', ( ) => {
    location.reload()
});
let divIconos = document.querySelector('#iconos');
document.body.appendChild(botonRefrescar);


fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(persona => {
            texto1.innerHTML = 'Mi nombre es';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${persona.name.first} ` + `${persona.name.last} ` + `${persona.name.title} `;
            icono1.addEventListener('mouseover', () => {
                texto1.innerHTML = 'Mi nombre es';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${persona.name.first} ` + `${persona.name.last} ` + `${persona.name.title} `;
            })

            icono2.addEventListener('mouseover', () => {
                texto1.innerHTML = 'Mi gmail es';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${persona.email} `;
            })

            icono3.addEventListener('mouseover', () => {
                texto1.innerHTML = 'Mi cumpleaños es el';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${new Date (persona.dob.date)} ` + ` y tengo ${persona.dob.age}`;
            })

            icono4.addEventListener('mouseover', () => {
                texto1.innerHTML = 'Mi dirección se situa en';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${persona.location.street.number} ${persona.location.street.name} ` + ` ${persona.location.city} ${persona.location.state} ${persona.location.country} ` + `y mi codigo postal es ${persona.location.postcode}`;
            })

            icono5.addEventListener('mouseover', () => {
                texto1.innerHTML = 'Mi numero de telefono es';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${persona.cell}`;
            })

            icono6.addEventListener('mouseover', () => {
                texto1.innerHTML = 'Mi contraseña es';
                image.src = `${persona.picture.large}`;
                nombrePersona.innerHTML = `${persona.login.password}`;
            })
        });
    })

