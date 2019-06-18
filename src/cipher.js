window.cipher = {
    encode:(offset,palabra)=>{
        palabra=palabra.toUpperCase();
       
        let palabraEncriptada=''; // Aquí es un arreglo que empieza vacío en el que se irá guardando la 'palabra' ya encriptada
  
        for(let i=0;i<palabra.length;i++){
            let posicionLetra=(palabra.charCodeAt(i)); //Esta es la posición ASCII de cada letra ingresada 
            let positionAsciiLetra=(((posicionLetra-65)+offset)%26+65); //Solicito la nueva posición ASCII de letra por letra según el offset
            let letraEncriptada=String.fromCharCode(positionAsciiLetra); //Solicito que la posición anterior me la vuelvo caracter
            palabraEncriptada= palabraEncriptada + letraEncriptada;
            }
            return palabraEncriptada;
        },
    decode:(offset,palabraEncriptada)=>{
        palabraEncriptada=palabraEncriptada.toUpperCase();
        
        let palDesencriptada=''; //Arreglo vacío en el que se irá guardando la palabra a descencriptar
        
        for(let i=0;i<palabraEncriptada.length;i++){
            let posLetDesencri=(palabraEncriptada.charCodeAt(i)); //Solicito la posición ASCII de cada letra encriptada
            let posDesencri=(posLetDesencri-65-offset+52)%26+65; //Una vez que me dio la posición anterior, quiero que me de la posición a la cual debe regresar originalmente 
            let letraDesencri=String.fromCharCode(posDesencri); //Solicitio que el valor obtenido que lo convierta a caracter
            palDesencriptada=palDesencriptada + letraDesencri;
            }
            return palDesencriptada;
        }
};
//module.exports=cipher;


