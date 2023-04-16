function downloadJSAtOnload() {
    // Escribir aquí el codigo JS de la APP 
    // Función que limpia el texto analizado de caracteres especiales
    const limpiarTexto = (texto)=>{
        texto=texto.replace(/[^a-zA-Z 0-9 áéíóú]+/g,' ');
        const array = texto.split(' ');
        const cleanArray = [];
        for(let i = 0; i < array.length; i++ ){
            if ( array[ i ] ){
            cleanArray.push( array[i] );
            }
        } 
        return cleanArray;
    }

    // Definición de los elementos del DOM
    const texto=document.getElementById('txtTexto');
    const palabra=document.getElementById('txtPalabra');
    const btnBuscar=document.getElementById('btnBuscar');
    const mensaje=document.getElementById('mensaje');
    const resultados=document.getElementById('resultados');

    // Si se presiona el botón de búsqueda de coincidencias
    document.getElementById('btnBuscar').addEventListener('click',()=>{
        // guardo el texto a revisar y la palabra a buscar
        let texto=document.getElementById('txtTexto').value.toLowerCase();
        let palabra=document.getElementById('txtPalabra').value.toLowerCase();
        // si no se ingresa texto ni palabra ...
        if(texto===''|| palabra===''){
            resultados.style.display='block';
            resultados.style.background='yellow';
            mensaje.textContent=`Datos Insuficientes!`;
            mensaje.style.color='red';
            setTimeout('document.location.reload()',2000);
        }else{
            // si se ingresa texto y palabra ...
            var cont=0;
            // limpio el texto a revisar
            cleanArray=limpiarTexto(texto);
            // Busco coincidencias
            for(let i=0;i<cleanArray.length;i++){
                if(cleanArray[i]==palabra){
                    // cuento las coincidencias encontradas
                    cont=cont+1;
                }
            }
            // Muestro el resultado de la búsqueda 
            resultados.style.display='block';
            mensaje.textContent=`Coincidencias: ${cont}`;
            mensaje.style.color='white';
            if(cont==0){
                // Estilos si no hay coincidencias ....
                resultados.style.background='red';
            }else{
                // estilos si hay coincidencias
                resultados.style.background='green';
            }
            // Muestro resultados por 2 seg y reinicio el script
            setTimeout('document.location.reload()',2000);
        }
    })

}

if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
