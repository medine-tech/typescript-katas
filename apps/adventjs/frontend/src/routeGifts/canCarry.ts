const canCarry = (capacity :number, trips : Array<Array<number>>) => {

    const stopMax = Math.max(...trips.reduce((acc, item) => {return [...acc , item[2]]}))

    let gifts = 0;

    for (let i = 0;  i <= stopMax; i++){

        for (const trip of trips )
        {
            if(i === trip[1]) gifts += trip[0]

            if(i === trip[2]) gifts -= trip[0]
        }

        if(gifts > capacity) return false
    }

    return true
}

export default canCarry
