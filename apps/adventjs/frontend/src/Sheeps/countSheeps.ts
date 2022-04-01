interface ISheep {
  name: string
  color: string
}

export const filterSheeps = (sheeps: Array<ISheep>): Array<ISheep> => {
  return sheeps.filter((sheep: ISheep) => {
    const name = sheep.name.trim().toLowerCase()

    return sheep.color === "rojo" && name.includes("a") && name.includes("n")
  })
}
