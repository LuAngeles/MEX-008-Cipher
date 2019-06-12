//window.cipher = {
  // ... 
//};

//Variables generales para mostrar y ocultar secciones -esto evita abrir varios HTML's//
const mostrarSeccion=(id)=>{
  document.getElementById(id).classList.remove('oculto')
}
const ocultarSeccion=(id)=>{
  document.getElementById(id).classList.add('oculto')
}

//Variable para el botón que el usuario presionará si es jefe (prototipo hoja 1)
const jefeButton=document.getElementById('jefe-boton');


//Variable del botón que el usuario presionará si es nuevo (prototipo hoja 1)
const registroBoton=document.getElementById('Bot-Registro')



//Variable en la que abrirá una nueva pagina, una vez que, dieron click en "jefe" (prototipo hoja 1.1)
const verPagJefe=()=>{
    ocultarSeccion('TipoDeUsuario');
    mostrarSeccion('pag-jefe');
}
//Variable en la que abrirá una nueva página, una vez que, dieron click en "registro" (prototipo hoja 1.1)
const pagRegistro=()=>{
  ocultarSeccion('TipoDeUsuario');
  mostrarSeccion('pag-jefe')
}

//Mandará llamar con el botón de "jefe" a la página de clave de usuario//
jefeButton.addEventListener('click',verPagJefe);

//Mandará llamar con el botón de "registro" a la página de clave de usuario//
registroBoton=document.getElementById('click',pag-registro)