export const contains = (store: any, product: string) => {
   return iterations(store).some(item => item === product);
    
}

const iterations = (store: any) => {
    let result: any[] = [];

    for (let property in store) {
        const son = store[property];
        if (typeof son === 'object'){
            result = [...result, ...iterations(son)];
        }
        result.push(son);
    }

    return result;
}