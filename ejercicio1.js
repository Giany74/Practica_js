/*
Crea un archivo ejercicio1.js que tenga un objeto con los siguientes campos: 
Nombre, 
apellidos, 
un array con los temas del bootcamp que ya conoces, 
si estás en busqueda activa con un boolean 
y un array de objetos el cual tenga un link a alguna red social con el nombre y link de la red social. 
(Con uno vale, Github por ejemplo, pero dentro de un array).
*/

const user_object = {
    nombre : 'Gianluca',
    apellidos: 'Pettenon',
    themeBootcamp: ['Git-GitHub', 'html-css', 'JavaScript'],
    activeSearch: true,
    socialLinks: [
        {name: 'github', link: 'https://github.com/Giany74'},
        {name: 'linkedin', link: 'https://www.linkedin.com/in/gianluca-pettenon-a4051a8a/'},
        {name: 'instagram', link: 'https://www.instagram.com/gianluca.pettenon/'},
        {name: 'behance', link: 'https://www.behance.net/gianlucapettenon'},
        {name: 'facebook',link: 'https://www.facebook.com/gianluca.pettenon/'}
    ]
};

console.log('Nombre:', user_object.nombre);
console.log('Apellidos:', user_object.apellidos);
console.log('Temas del Bootcamp:', JSON.stringify(user_object.themeBootcamp));
console.log('Busqueda activa:', user_object.activeSearch);
console.log('Redes sociales:');
user_object.socialLinks.forEach((elem) => {
    console.log(elem.name + ': ' + elem.link);
});