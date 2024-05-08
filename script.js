// Valor de desplazamiento predeterminado
let desplazamientoPredeterminado = 3;

// Función para cambiar el valor de desplazamiento desde la consola
function valorPredeterminado(nuevoValor) {
    desplazamientoPredeterminado = nuevoValor;
    console.log(`Nuevo valor de desplazamiento establecido: ${desplazamientoPredeterminado}`);
}

function codificar() {
    let palabra = document.getElementById('palabra').value;
    document.getElementById('resultado').innerText = cifrar(palabra, desplazamientoPredeterminado);
}

function decodificar() {
    let palabra = document.getElementById('palabraCodificada').value;
    document.getElementById('resultado').innerText = cifrar(palabra, -desplazamientoPredeterminado);
}

function cifrar(palabra, desplazamiento) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let resultado = '';
    for (let char of palabra) {
        if (char.match(/[a-z]/i)) {
            let mayuscula = char === char.toUpperCase();
            let pos = alfabeto.indexOf(char.toLowerCase());
            if (pos === -1) continue;
            let newPos = (pos + desplazamiento + 26) % 26;
            let nuevoChar = alfabeto[newPos];
            resultado += mayuscula ? nuevoChar.toUpperCase() : nuevoChar;
        } else {
            resultado += char;
        }
    }
    return resultado;
}
