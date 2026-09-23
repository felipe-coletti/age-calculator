const isLeapYear = year => {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const daysInMonth = (month, year) => {
	const daysPerMonth = [
		31,
		isLeapYear(year) ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	]

	return daysPerMonth[month - 1]
}

export const calculateDateDifference = (start, end) => {
	const [startYear, startMonth, startDay] = start.split('-').map(Number)
	const [endYear, endMonth, endDay] = end.split('-').map(Number)

	const startDate = new Date(startYear, startMonth - 1, startDay)
	const endDate = new Date(endYear, endMonth - 1, endDay)

	if (startDate > endDate) {
		throw new Error('A data inicial deve ser anterior ou igual à data final.')
	}

	let years = endYear - startYear
	let months = endMonth - startMonth
	let days = endDay - startDay

	if (days < 0) {
		months--

		const previousMonth =
			endMonth === 1 ? 12 : endMonth - 1

		const previousMonthYear =
			endMonth === 1 ? endYear - 1 : endYear

		days += daysInMonth(previousMonth, previousMonthYear)
	}

	if (months < 0) {
		years--
		months += 12
	}

	return { years, months, days }
}