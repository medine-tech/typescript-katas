export const pangram = (letter: string): boolean => {
    return new Set(letter.match(/[a-záéíóúäü]/gi)).size >= 27;
}