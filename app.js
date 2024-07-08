let respuesta='';
let inicio=0;


function codificarTexto(){
    let texto=document.getElementById("texto").value;
    if (contieneMayusculas(texto) || contieneAcentos(texto)) {
        alert('El texto no puede contener letras mayúsculas ni caracteres acentuados.');
        return;
    }
    inicio++;
    if(inicio==1){
        cambioValores();
    }
    respuesta='';
    document.getElementById('respuesta_Men').innerText ='';
    for (let i = 0; i < texto.length; i++) {
        respuesta=respuesta+texto[i];
        if(texto[i]=='a'){
            respuesta=respuesta+'i';  
        }else if(texto[i]=='e'){
            respuesta=respuesta+'nter';  
        }else if(texto[i]=='i'){
            respuesta=respuesta+'mes';  
        }else if(texto[i]=='o'){
            respuesta=respuesta+'ber';  
        }else if(texto[i]=='u'){
            respuesta=respuesta+'fat';  
        };
        
      };
      limpiarCaja();
      document.getElementById('respuesta_Men').innerText =respuesta;

      
};

function decodificarTexto(){
    let texto=document.getElementById("texto").value;
    if (contieneMayusculas(texto) || contieneAcentos(texto)) {
        alert('El texto no puede contener letras mayúsculas ni caracteres acentuados.');
        return;
    }
    respuesta='';
    inicio++;
    if(inicio==1){
        cambioValores();
    }
    document.getElementById('respuesta_Men').innerText ='';
    for (let i = 0; i < texto.length; i++) {
        respuesta=respuesta+texto[i];
        if(texto[i]=='a'){
            i++;  
        }else if(texto[i]=='e'){
            i=i+4;  
        }else if(texto[i]=='i'){
            i=i+3;  
        }else if(texto[i]=='o'){
            i=i+3;   
        }else if(texto[i]=='u'){
            i=i+3;  
        };
        
      };
      limpiarCaja();
      document.getElementById('respuesta_Men').innerText =respuesta;
};

function copiarTexto() {
    let parrafo = document.getElementById('respuesta_Men');
    let texto = parrafo.innerText;

    let textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

  };

function cambioValores(){
    document.getElementById('imag_niño').style.display = 'none';
    document.getElementById('men_sub').style.display = 'none';
    document.getElementById('men_info').style.display = 'none';

    document.getElementById('respuesta_Men').style.display = 'block';
    document.getElementById('copiar').style.display = 'block';
};

function asignarTextoElemento(elemento, texto){
    let titulo=document.querySelector(elemento);
titulo.innerHTML = texto;

};

function limpiarCaja(){
    let valorCaja=document.querySelector('#texto');
    valorCaja.value='';
};

function contieneMayusculas(texto) {
    return /[A-ZÁÉÍÓÚÜ]/.test(texto);
};

function contieneAcentos(texto) {
    return /[ÁÉÍÓÚÜáéíóúü]/.test(texto);
};


  