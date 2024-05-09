// Valor de desplazamiento predeterminado para letras
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

// Mapeo de cifrado y descifrado para números
const mapeoNumeros = {
    '0': '3', '1': '4', '2': '5', '3': '6', '4': '7', '5': '8', '6': '9', '7': '0', '8': '1', '9': '2'
};
const mapeoInversoNumeros = {
    '3': '0', '4': '1', '5': '2', '6': '3', '7': '4', '8': '5', '9': '6', '0': '7', '1': '8', '2': '9'
};

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
        } else if (char.match(/[0-9]/)) {
            resultado += desplazamiento >= 0 ? mapeoNumeros[char] : mapeoInversoNumeros[char];
        } else {
            resultado += char;
        }
    }
    return resultado;
}
