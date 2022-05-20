export const pangram = (letter: string): boolean => {
    return new Set(letter.match(/[a-záéíóúäü]/gi)).size >= 27;
}


let lettersUsed = []
if (!letter.includes('ñ')) {
    return false;
}
if (!letter.includes('n')) {
    return false;
}
const sanitizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
for (let i = 0; i < sanitizedLetter.length; i++) {
    const chart = sanitizedLetter.charAt(i);
    if (!lettersUsed.includes(chart) && chart.match(/^[a-z]+$/) !== null) {
        lettersUsed.push(chart)
    }
}
return lettersUsed.length >= 26;