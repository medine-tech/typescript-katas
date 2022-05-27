const fixFiles = (files: Array<string>): Array<string> => {
  const groupBy = (collection: Array<string>) => {
    return collection.reduce((result, value, key) => {
      const originalKey = key
      key = value

      if (result.hasOwnProperty(key)) {
        result[key].push({
          originalKey,
          value: `${key}(${result[key].length})`,
        })
      } else {
        result[key] = [{ originalKey, value: `${key}` }]
      }

      return result
    }, {})
  }

  const filesGrouped = groupBy(files)
  console.log(filesGrouped, "files grouped")

  return files.map((file, index) => {
    if (filesGrouped[file].length > 1) {
      const fileGrouped = filesGrouped[file].find(
        (f) => f.originalKey === index
      )
      return fileGrouped.value
    }

    return file
  })
}

export default fixFiles
