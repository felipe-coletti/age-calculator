const isLeapYear = year => {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const daysInMonth = (month, year) => {
	const daysPerMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	return daysPerMonth[month - 1]
}

export const calculateDateDifference = (start, end) => {
	let [firstYears, firstMonths, firstDays] = start.split('-').map(Number)
	let [secondYears, secondMonths, secondDays] = end.split('-').map(Number)

	if (secondDays < firstDays) {
		secondMonths -= 1
		secondDays += daysInMonth(secondMonths === 0 ? 12 : secondMonths, secondMonths === 0 ? secondYears - 1 : secondYears)
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

export const formatAge = ({ years, months, days }) =>
	`${years} ${years !== 1 ? 'anos' : 'ano'}, ${months} ${months !== 1 ? 'meses' : 'mês'} e ${days} ${days !== 1 ? 'dias' : 'dia'}.`

export const pad = n => String(n).padStart(2, '0')
