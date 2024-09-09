const brailleAlphabet = {
    'a': 'O.....', 'b': 'O.O...', 'c': 'OO....', 'd': 'OO.O..', 'e': 'O..O..', 'f': 'OOO...',
    'g': 'OOOO..', 'h': 'O.OO..', 'i': '.OO...', 'j': '.OOO..', 'k': 'O...O.', 'l': 'O.O.O.',
    'm': 'OO..O.', 'n': 'OO.OO.', 'o': 'O..OO.', 'p': 'OOO.O.', 'q': 'OOOOO.', 'r': 'O.OOO.',
    's': '.OO.O.', 't': '.OOOO.', 'u': 'O...OO', 'v': 'O.O.OO', 'w': '.OOO.O', 'x': 'OO..OO',
    'y': 'OO.OOO', 'z': 'O..OOO', ' ': '......'
};

const reverseBrailleAlphabet = Object.keys(brailleAlphabet).reduce((acc, key) => {
    acc[brailleAlphabet[key]] = key;
    return acc;
}, {});

function translate(input) {
    if (input[0] === 'O' || input[0] === '.') {
        // Braille to English
        return input.match(/.{6}/g).map(char => reverseBrailleAlphabet[char]).join('');
    } else {
        // English to Braille
        return input.toLowerCase().split('').map(char => brailleAlphabet[char]).join('');
    }
}

const input = process.argv.slice(2).join(' ');
console.log(translate(input));
