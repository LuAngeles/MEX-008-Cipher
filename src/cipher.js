window.cipher = {
    encode:(offset,palabra)=>{
       
       
        let palabraEncriptada=''; // Aquí es un arreglo que empieza vacío en el que se irá guardando la 'palabra' ya encriptada
  
        for(let i=0;i<palabra.length;i++){
            let posicionLetra=(palabra.charCodeAt(i)); //Esta es la posición ASCII de cada letra ingresada 
            if(posicionLetra>=65 && posicionLetra<=90){
                let positionAsciiLetra=(posicionLetra-65+offset)%26+65; //Solicito la nueva posición ASCII de letra por letra según el offset
                let letraEncriptada=String.fromCharCode(positionAsciiLetra); //Solicito que la posición anterior me la vuelvo caracter
                palabraEncriptada += letraEncriptada;     
            
            }else if(posicionLetra>=97 && posicionLetra<=122){
                let positionAsciiLetra=(posicionLetra-97+offset)%26+97; //Solicito la nueva posición ASCII de letra por letra según el offset
                let letraEncriptada=String.fromCharCode(positionAsciiLetra); //Solicito que la posición anterior me la vuelvo caracter
                palabraEncriptada += letraEncriptada;
            } else{
                palabraEncriptada += palabra[i];
            }


            }
            return palabraEncriptada;
        },
    decode:(offset,palabraEncriptada)=>{
        
        let palDesencriptada=''; //Arreglo vacío en el que se irá guardando la palabra a descencriptar
        
        for(let i=0;i<palabraEncriptada.length;i++){
            let posLetDesencri=(palabraEncriptada.charCodeAt(i)); //Solicito la posición ASCII de cada letra encriptada
            if(posLetDesencri>=65 && posLetDesencri<=90){
                let posDesencri=((posLetDesencri-90-offset)%26+90); //Una vez que me dio la posición anterior, quiero que me de la posición a la cual debe regresar originalmente 
                let letraDesencri=String.fromCharCode(posDesencri); //Solicitio que el valor obtenido que lo convierta a caracter
                palDesencriptada += letraDesencri;
            
            } else if(posLetDesencri>=97 && posLetDesencri<=122){
                let posDesencri=(posLetDesencri+122-offset)%26+122; //Una vez que me dio la posición anterior, quiero que me de la posición a la cual debe regresar originalmente 
                let letraDesencri=String.fromCharCode(posDesencri); //Solicitio que el valor obtenido que lo convierta a caracter
                palDesencriptada=palDesencriptada + letraDesencri;
            } else{
                palDesencriptada +=[i];
            }

            }
            return palDesencriptada;
        }
};



