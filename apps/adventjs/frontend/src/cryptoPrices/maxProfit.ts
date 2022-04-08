export const maxProfit = (prices: number[]): number => {
  return prices.reduce(
    (maxProfif: number, currentPrice: number, index: number) => {
      const restInArray = prices.slice(index + 1)
      const maxInRestOfArray = Math.max(...restInArray)
      const difference = maxInRestOfArray - currentPrice

      if (difference > 0 && difference > maxProfif) {
        maxProfif = difference
      }

      return maxProfif
    },
    -1
  )
}
