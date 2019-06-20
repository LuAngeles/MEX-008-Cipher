//Funciones generales para mostrar y ocultar secciones -esto evita abrir varios HTML's//
const mostrarSeccion=(id)=>{
  document.getElementById(id).classList.remove('oculto')
  }
const ocultarSeccion=(id)=>{
  document.getElementById(id).classList.add('oculto')
  }
  
  const ocultarBoton=(id)=>{
    document.getElementById(id).classList.add('boton')
  }
  // Funciones generales para guardar y mostrar los nombres tanto del Jefe como del empleado
  const nombres=(nombre,posicion)=>{
    let valorNombre=document.getElementById(nombre).value;
    let verNombre=document.getElementById(posicion);
   
  verNombre.innerHTML=('Listo ' + valorNombre);
   
  ;
  }
    
////////////////////////////////////////////////////////////////////
 
//////// SECCIÓN DEL JEFE /////////////////////////
  
//// PROTOTIPO DE HOJA 1 A HOJA 1.1 /////////
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

/// Sección de Instrucciones en hoja de portada ///
  ///PARA ABRIR LA PÁGINA///
const instrucciones=document.getElementById('boton-1');
const cerrar=document.getElementById('cerrar');

const pagInstrucciones=()=>{
  mostrarSeccion('instrucciones-1');
  }
instrucciones.addEventListener('click',pagInstrucciones);

/// CERRAR PÁGINA ///
const cerrarPag=()=>{
  ocultarSeccion('instrucciones-1');
}
cerrar.addEventListener('click',cerrarPag);

//// PROTOTIPO DE HOJA 1.1 A HOJA 3 ///////////////////////////
const enviarClUsuario=document.getElementById('enviar-clave-usuario');
  
const verPagCod=()=>{
  ocultarSeccion('registro-boton');
  ocultarSeccion('pag-jefe');
  mostrarSeccion("pag-crear-codigo");
  }
enviarClUsuario.addEventListener('click',verPagCod);

//// PROTOTIPO DE HOJA 3 A HOJA 4 ////

///Sección donde debe aparecer el nombre del jefe en la página///

const nombreJefe=nombres('nombre-jefe','ver-nombre-jefe');
//const verNombre=document.getElementById('ver-nombre-jefe');
//const nombre=document.getElementById('nombre-jefe').value;

//verNombre.innerHTML=nombre;





////Página que aparecerá para CIFRAR////
const desplazamiento=document.getElementById('desplazamiento');
const palabraOriginal=document.getElementById('crear-codigo-para-empleado');


const codEncriptadoJefe=document.getElementById('encriptar');

const verPagCodEncriptado=()=>{
  let valorDesplazamiento=parseInt(desplazamiento.value); //cambia a número//
  const codigoCifrado=document.getElementById('codigo-cifrado');
  let codigoFinal=cipher.encode(valorDesplazamiento,palabraOriginal.value);
  codigoCifrado.innerHTML=codigoFinal;
    
  ocultarSeccion('pag-crear-codigo');
  mostrarSeccion('codigo-final');
  }
codEncriptadoJefe.addEventListener('click',verPagCodEncriptado);
  
/// Sección de instrucciones en hoja 3 de prototipo ////
  /// ABRIR PÁGINA///
const instruc=document.getElementById('boton-2');
const cierre=document.getElementById('cerrar2');
    const pagInstruc=()=>{
      mostrarSeccion('instrucciones-2');
      //mostrarSeccion('cerrar2');
    }
instruc.addEventListener('click',pagInstruc);

  /// CERRAR PÁGINA ///
const cierrePag=()=>{
  ocultarSeccion('instrucciones-2');
  }
cierre.addEventListener('click',cierrePag);

//// HOJA 4.1 DE PROTOTIPO ////
/// Página que aparecerá para desencriptar o recuperar la contraseña original///
 const paginaDesencr=document.getElementById('decode-codigo');
 
 const verPaginaDesencr=()=>{
  ocultarSeccion('codigo-final');
  mostrarSeccion('recuperar-codigo');
}
paginaDesencr.addEventListener('click',verPaginaDesencr);

//// HOJA 4.2 DE PROTOTIPO ////

const desplEncrip=document.getElementById('desplazamiento-encriptado');
const palabraEncriptada=document.getElementById('code-encript');
const codDesencriptado=document.getElementById('desencriptar');
//const desencrFinal=document.getElementById('desencriptar')

const verPagDesencr=()=>{
  let valDesplEncr=parseInt(desplEncrip.value);
  const codigoDesencriptado=document.getElementById('codigo-decifrado');
  let codDesFinal=cipher.decode(valDesplEncr,palabraEncriptada.value);
  codigoDesencriptado.innerHTML=codDesFinal;

  ocultarSeccion('recuperar-codigo');
  mostrarSeccion('code-desencriptado');
  }
codDesencriptado.addEventListener('click',verPagDesencr);

//////////////////////////////////////////////////////////////////////////////////////////
///////// SECCIÓN PARA EL EMPLEADO ////////////////////////
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

///Mando de E1 a E2 de hoja de mi prototipo//
// Sección donde debe aparecer el nombre del empleado en la página//

const nombreEmpleado=nombres('nombre-empleado','ver-nombre-empleado');

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
  
//Variable en la que abrirá una nueva pagina, una vez que, dieron click en "registro"(prototipo hoja 1.1)
//Debe mostrar la misma que para ingresar como jefe//
registroBoton.addEventListener('click',verPagJefe);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///sale de la última página y regresa a la página de inicio///
const reinicio=document.getElementById('salida');

const pagInicio=()=>{
  location.reload(TipoDeUsuario);
}
reinicio.addEventListener('click',pagInicio);