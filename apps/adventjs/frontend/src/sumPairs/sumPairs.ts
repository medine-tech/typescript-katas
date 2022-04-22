const sumPairs = (data: number[], result: number): number[] | null => {
  const dataClone = [...data]
  let response: null | number[] = null
  let isEqual: boolean = false

  data.forEach((valueData: number) => {
    dataClone.shift()

    dataClone.forEach((valueDataClone: number) => {
      if (valueData + valueDataClone === result && !isEqual) {
        response = [valueData, valueDataClone]
        isEqual = true
      }
    })
  })
  return response
}

export default sumPairs
