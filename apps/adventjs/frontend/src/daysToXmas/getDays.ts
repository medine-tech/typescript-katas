const getDays = (date: Date) => {
  const hollidayDate = new Date("Dec 25, 2022")
  const diff = hollidayDate.getTime() - date.getTime()

  return Math.ceil(diff / (24 * 60 * 60 * 100))
}

export default getDays
