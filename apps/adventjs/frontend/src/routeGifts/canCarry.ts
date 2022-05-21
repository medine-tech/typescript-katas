const canCarry = (capacity :number, trips : Array<Array<number>>) => {
    const capacitys : number = capacity
    let deliver = 0
    let gifts = 0
    let getGifs = 0

    for (const trip of trips){
        const gift = trip[0]
        getGifs = trip[1]
        gifts += trip[0]

        if(gift > capacitys || gifts > capacitys && deliver > getGifs)
        return false

        deliver = trip[2]
    }

    return true
}

export default canCarry
