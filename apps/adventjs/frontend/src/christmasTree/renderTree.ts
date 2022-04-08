const renderTree = (height: number) => {
  let tree = ""
  const leaf = "*"
  const trunk = "#"
  const bar = "_"

  for (let i = 1; i <= height + 2; i++) {
    if (i <= height) {
      tree +=
        bar.repeat(height - i) +
        leaf.repeat(i * 2 - 1) +
        bar.repeat(height - i) +
        "\n"
    } else {
      tree += bar.repeat(height - 1) + trunk + bar.repeat(height - 1) + "\n"
    }
  }

  return tree.trim()
}

export default renderTree
