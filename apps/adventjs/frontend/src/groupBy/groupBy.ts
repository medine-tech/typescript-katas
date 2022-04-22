const groupBy = <T, U>(array: T[], param: U) => {
  return array.reduce((acc, value) => {
    const result = typeof param === "function" ? param(value) : value[param]
    if (acc.hasOwnProperty(result)) {
      acc[result].push(value)
    } else {
      acc[result] = [value]
    }
    return acc
  }, {})
}

export default groupBy
