const groupBy = <T, U>(array: T[] | any, param: U) => {
  return array.reduce((acc: Record<any, any>, value: object) => {
    const result = typeof param === "function" ? param(value) : (value[param])
    if (acc.hasOwnProperty(result)) {
      acc[result].push(value)
    } else {
      acc[result] = [value]
    }
    return acc
  }, {})
}

export default groupBy
