const validateLetter = (letter: string) => {
  const open = letter.indexOf("(")
  const close = letter.indexOf(")")
  const vacio = letter.replace("()", "").trim()
  const existKeysOpen = letter.indexOf("{")
  const existKeysClose = letter.indexOf("}")
  const existSquareBracketsOpen = letter.indexOf("[")
  const existSquareBracketsClose = letter.indexOf("]")
  const cond1 = open < 0 || close < 0
  const cond2 = letter.length > vacio.length
  const cond3 = existKeysOpen >= 0 || existKeysClose >= 0
  const cond4 = existSquareBracketsOpen >= 0 || existSquareBracketsClose >= 0
  const cond5 = open >= 0 && close >= 0 && close < open

  return !(cond1 || cond2 || cond3 || cond4 || cond5)
}

export default validateLetter
