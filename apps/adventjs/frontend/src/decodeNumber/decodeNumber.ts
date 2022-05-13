type ValueSymbols = {".": number, ",": number, ":": number, ";": number, "!": number}
type Symbol = '.' | ',' | ':' | ';' | '!';

const decodeNumber = (symbols: string) => {
    const valueSymbols: ValueSymbols = {'.':1, ',':5, ':':10, ';':50, '!':100};
    let result = 0;

    for(const index in [...symbols]) {
        const symbol = (symbols[index] as Symbol);
        const nextSymbol = (symbols[parseInt(index)+ 1] as Symbol)

        if(valueSymbols[symbol] < valueSymbols[nextSymbol]){
            result -= valueSymbols[symbol];
        } else {
            result += valueSymbols[symbol];
        }
    }
    return result;
}

export default decodeNumber;