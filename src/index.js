//Variables generales para mostrar y ocultar secciones -esto evita abrir varios HTML's//
const mostrarSeccion=(id)=>{
    document.getElementById(id).classList.remove('oculto')
  }
  const ocultarSeccion=(id)=>{
    document.getElementById(id).classList.add('oculto')
  }
  
  const ocultarBoton=(id)=>{
    document.getElementById(id).classList.add('boton')
  }
    
  ////////////////////////////////////////////////////////////////////
   ////// DE HOJA 1 A HOJA 1.1 U HOJA 2 /////////////////////////////
  
  //////// JEFE /////////////////////////
  
  ////////// PROTOTIPO DE HOJA 1 A HOJA 1.1 /////////
  //Variable para el botón que el usuario presionará si es jefe (prototipo hoja 1)
  const jefeButton=document.getElementById('jefe-boton');
  
  //Variable en la que abrirá una nueva pagina, una vez que, dieron click en "jefe" (prototipo hoja 1.1)
  const verPagJefe=()=>{
    ocultarSeccion('TipoDeUsuario');
    ocultarBoton('registro-boton');
    mostrarSeccion('pag-jefe');
  }
  //Mandará llamar con el botón de "jefe" a la página de clave de usuario//
  jefeButton.addEventListener('click',verPagJefe);
  
  /////// PROTOTIPO DE HOJA 1.1 A HOJA 3 ///////////////////////////
  const enviarClUsuario=document.getElementById('enviar-clave-usuario');
  
  const verPagCod=()=>{
    ocultarSeccion('registro-boton');
    ocultarSeccion('pag-jefe');
    mostrarSeccion("pag-crear-codigo");
  }
    enviarClUsuario.addEventListener('click',verPagCod);

    //// PROTOTIPO DE HOJA 3 A HOJA 4 ////
    const codEncriptadoJefe=document.getElementById('encriptar');
    const verPagCodEncriptado=()=>{
      ocultarSeccion('pag-crear-codigo');
      mostrarSeccion('codigo-final');
    }
    codEncriptadoJefe.addEventListener('click',verPagCodEncriptado);
  
  
  ///////// EMPLEADO ////////////////////////
  //Variable para el botón que el usuario presionará si es "EMPLEADO" (Prototipo hoja 1)
  const empleadoButton=document.getElementById('empleado-boton');
  const verPagEmpleado=()=>{
    ocultarSeccion('TipoDeUsuario');
    mostrarSeccion('pag-empleado');
  }
  //Mandará llamar con el botón de "EMPLEADO" a la página de clave de usuario//
  empleadoButton.addEventListener('click',verPagEmpleado);

  //aquí debo mandar abrir desde pág 2 a E1 
  // Le voy a solicitar al empleado que escriba su nombre y clave de usuario para enviarlo a la página donde escribirá el código encriptado//
  const enviarDatosEmpleado=document.getElementById('datos-empleado');
  const codigoEmpleado=()=>{
    ocultarSeccion('pag-empleado');
    mostrarSeccion('codigo-empleado');
  }
  enviarDatosEmpleado.addEventListener('click',codigoEmpleado);

  //Mando de E1 a E2 de hoja de mi prototipo//
  // Le voy a solicitar al empleado que escriba el código encriptado y así pueda enviar su trabajo//
  const enviarCodEncriptado=document.getElementById('codigo-encriptado');
  const codEncriptadoEmpleado=()=>{
    ocultarSeccion('codigo-empleado');
    mostrarSeccion('enviar-trabajo');
  }
  enviarCodEncriptado.addEventListener('click',codEncriptadoEmpleado);
  
  ////////////// REGISTRO //////////////////////
  
  //Variable del botón que el usuario presionará si es nuevo (prototipo hoja 1)
  const registroBoton=document.getElementById('registro-boton');
  //Variable en la que abrirá una nueva pagina, una vez que, dieron click en "jefe" (prototipo hoja 1.1)
  registroBoton.addEventListener('click',verPagJefe);
  
    //Variable en la que abrirá una nueva página, una vez que, dieron click en "registro" (prototipo hoja 1.1)
  const pagRegistro=()=>{
    ocultarSeccion('TipoDeUsuario');
    mostrarSeccion('pag-jefe')
  }
  
  //Mandará llamar con el botón de "registro" a la página de clave de usuario//
  registroBoton=document.getElementById('click',pagRegistro)
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Esto fue en lo que avancé para realizar el cifrar y decifrar //
  
  let palabraEncriptada=''; // Aquí es un arreglo en el que se irán guardando la 'palabra' ya encriptada
for(i=0;i<longitudPalabra;i++){
let posicionLetra=(palabra.charCodeAt(i)); //Esta es la posición ASCII de cada letra ingresada 
let positionAsciiLetra=(((posicionLetra-65)+offset)%26+65); //Solicito la nueva posición ASCII de letra por letra según el offset
let letraEncriptada=String.fromCharCode(positionAsciiLetra); //Solicito que la posición anterior me la vuelvo caracter
palabraEncriptada= palabraEncriptada + letraEncriptada;
};

console.log('Tu código fue la palabra: ' + palabra + ' con un desplazamiento de ' + offset + ',por lo que, tu código encriptado es: '+palabraEncriptada);

let palDesencriptada='';
for(i=0;i<palabraEncriptada.length;i++){;
let posLetDesencri=(palabraEncriptada.charCodeAt(i));
let posDesencri=(posLetDesencri-65-offset)+52%26+65;
let letraDesencri=String.fromCharCode(posDesencri);
palDesencriptada=palDesencriptada + letraDesencri;
}
console.log('Tu código encriptado es: ' + palabraEncriptada + ' con un desplazamiento de ' + offset + ',así que tu palabra original es '+ palDesencriptada);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  