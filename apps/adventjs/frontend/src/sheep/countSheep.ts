interface ISheep {
  name: string
  color: string
}

export const filterSheep = (sheep: Array<ISheep>): Array<ISheep> => {
  return sheep.filter((sheep: ISheep) => {
    const name = sheep.name.trim().toLowerCase()

    return sheep.color === "rojo" && name.includes("a") && name.includes("n")
  })
}
