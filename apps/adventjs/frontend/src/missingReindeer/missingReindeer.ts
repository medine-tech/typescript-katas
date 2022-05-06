const missingReindeer = (values: number[]): number => {
  const valuesSort = values.sort((a, b) => a - b)

  for (let i = 0; i <= valuesSort.length; i++) {
    if (i !== valuesSort[i]) {
      return i
    }
  }
}

export default missingReindeer
