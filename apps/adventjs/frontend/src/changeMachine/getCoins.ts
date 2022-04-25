export const getCoins = (change:number) => {
    const result:number[] = [0, 0, 0, 0, 0, 0]
    const coins:number[] = [1, 2, 5, 10, 20, 50]

    for(let i:number = coins.length; i > 0 ; i--)
    {
        const pCoin:number = i-1
        const coin:number = coins[pCoin]

        const amountCoin:number = ~~(change/coin)
        const resto = change % coin

        change = resto
        result[pCoin] = amountCoin

    }

 return result
}