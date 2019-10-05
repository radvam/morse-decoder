const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let array = expr.split('');
    let arrMorse = [];
    let space = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] == '*') {
            space++;        
        }
        if (space == 10) {
            arrMorse.push(' ');
            space = 0;
        }
        if (i % 10 == 0 && i != 0 && i != array.length - 1) {
            arrMorse.push(',');
        }
        if (array[i] == '1') {
            arrMorse.push(array[i]);
        }
        if (arrMorse[arrMorse.length - 1] == '1' && arrMorse[arrMorse.length - 2] == '1') {
            arrMorse[arrMorse.length - 2] = '-';
            arrMorse.splice(-1,1);
        }
        if (array[i] == '0' && arrMorse[arrMorse.length - 1] == '1') {
            arrMorse[arrMorse.length - 1] = '.';
        }

    }

    let arrResult = arrMorse.join('').split(',');
    let message = '';

    for (let i = 0; i < arrResult.length; i++) {

        if (MORSE_TABLE[arrResult[i]]) {
            message += MORSE_TABLE[arrResult[i]];
        }
        if (arrResult[i] == ' '){
            message += ' ';
        }

    }
    
    return message;
}

module.exports = {
    decode
}