let year = 2022
let month = 1
let day = 1

function changeDate() {
  day = day - 1 === 0 ? 31 : day - 1
  if (day === 31)
    month = 12

  if (month === 12)
    year = 2021
}

function getMonday(weekNum) {
  if (weekNum > 52 || weekNum < 0)
    return new Error('周数量太大或太小')

  let date = 7
  while (date !== 1) {
    changeDate()
    date = getDay()
  }
  const mondayDate = new Date(`${year}-${month}-${day}`).valueOf()
  const timeValue = mondayDate + weekNum * 7 * 24 * 60 * 60 * 1000
  return new Date(timeValue).toLocaleDateString()
}

function getDay() {
  return new Date(`${year}-${month}-${day}`).getDay()
}

const time = getMonday(51)
console.log(time)
