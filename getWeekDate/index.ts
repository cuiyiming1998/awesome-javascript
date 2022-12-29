let year = 2022
let month = 1
let day = 1

function changeDate() {
  day = 0 === day - 1 ? 31 : day - 1
  if (31 === day) {
    month = 12
  }
  if (12 === month) {
    year = 2021
  }
}

function getMonday(weekNum) {
  if (weekNum > 52 || weekNum < 0) {
    return new Error('周数量太大或太小')
  }
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
