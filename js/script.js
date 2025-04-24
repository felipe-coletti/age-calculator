const form = document.getElementById('form')
const input = document.getElementById('input')

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function daysInMonth(month, year) {
    const daysPerMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return daysPerMonth[month - 1]
}

const calculateDateDifference = (start, end) => {
    let [firstYears, firstMonths, firstDays] = start.split('-').map(Number)
    let [secondYears, secondMonths, secondDays] = end.split('-').map(Number)

    if (secondDays < firstDays) {
        secondMonths -= 1
        secondDays += daysInMonth(
            secondMonths === 0 ? 12 : secondMonths,
            secondMonths === 0 ? secondYears - 1 : secondYears
        )
    }

    let days = secondDays - firstDays

    if (secondMonths < firstMonths) {
        secondYears -= 1
        secondMonths += 12
    }

    let months = secondMonths - firstMonths
    let years = secondYears - firstYears

    return { years, months, days }
}

const formatAge = ({ years, months, days }) =>
    `${years} ${years !== 1 ? 'anos' : 'ano'}, ${months} ${months !== 1 ? 'meses' : 'mês'} e ${days} ${
        days !== 1 ? 'dias' : 'dia'
    }.`

const pad = (n) => String(n).padStart(2, '0')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const birth = input.value
    const birthDate = new Date(birth)
    const currentDate = new Date()
    const current = `${currentDate.getFullYear()}-${pad(currentDate.getMonth() + 1)}-${pad(currentDate.getDate())}`

    const age =
        birthDate > currentDate ? calculateDateDifference(current, birth) : calculateDateDifference(birth, current)

    const resultElement = document.getElementById('result')
    const resultArea = document.getElementById('result-area')

    if (!isNaN(age.years) && !isNaN(age.months) && !isNaN(age.days)) {
        resultElement.innerHTML = birthDate > currentDate ? `Faltam ${formatAge(age)}` : formatAge(age)
        resultArea.style.display = 'flex'
    } else {
        resultElement.innerHTML = ''
        resultArea.style.display = 'none'
    }
})
