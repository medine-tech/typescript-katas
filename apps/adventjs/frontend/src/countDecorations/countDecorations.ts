interface bigTree {
  value: number
  left: bigTree | null
  right: bigTree | null
}

const countDecorations = (bigTree: bigTree): number => {
  let result = bigTree.value

  if (bigTree.left) result += countDecorations(bigTree.left)

  if (bigTree.right) result += countDecorations(bigTree.right)

  return result
}

export default countDecorations
