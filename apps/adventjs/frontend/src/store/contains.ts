const iterate = (object: any) => {
    let result: any[] = [];

    for (let property in object) {
        const child = object[property];
        if (typeof child === 'object'){
            result = [...result, ...iterate(child)];
        }
        result.push(child);
    }
    return result;
}

export const contains = (store: any, product: string) => { 
   return iterate(store).some(item => item === product);
    
}