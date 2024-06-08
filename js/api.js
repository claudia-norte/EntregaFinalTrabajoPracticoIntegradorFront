// dos peticiones

//crear una funcion que realice el pedido a la api
//devuelve n usuari complet
async function obtenerUsuarioAleatorio() {
  
    try {

        // realizar la petoc
        let respuesta=await fetch('https://randomuser.me/api/');   //agrego await la respuesta...
        let datos= await respuesta.json();  //agrego await la respuesta...
            return datos.results[0];

    }
    catch(error) {
        throw new error ("Error al obtener usuario",error);

    }

}



function agregarUsuarioAlDom(usuario){

    let contenedorUsuario=document.getElementById("usuarios");

    let nuevoUsuarioDiv=document.createElement("div");//crea nodo
    
    
    nuevoUsuarioDiv.innerHTML=`
              
        <img src="${usuario.picture.large}"> </img>
        <p>Nombre, Apellido: ${usuario.name.first}, ${usuario.name.last} </p>
        <p>Ciudad: ${usuario.location.city}</p>
        <p>Pais: ${usuario.location.country} </p>
        <p>Edad: ${usuario.dob.age} años </p>        
        <p><a href="mailto:">${usuario.email}</a></p>  
        <hr>
        
        `;
    contenedorUsuario.appendChild(nuevoUsuarioDiv);
}

    let obtenerUsuarioBtn=document.getElementById("obtenerUsuarioBtn");

     
//al boton le agrego un evento

        obtenerUsuarioBtn.addEventListener('click', async() => {
try
{
//llamo y obtengo un usuario nuevo

    let usuario =await obtenerUsuarioAleatorio();  //sin el await no funciona!!!
// se lo paso a la otra funcion para agregarla en en DOm

    agregarUsuarioAlDom(usuario);


}

catch(error){

    console.log ("hay errorr", error);
}

});






