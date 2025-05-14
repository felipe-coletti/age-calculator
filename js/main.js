import { calculateDateDifference, formatAge, pad } from './dateDifference.js'

const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', e => {
	e.preventDefault()

	const birth = input.value
	const birthDate = new Date(birth)
	const currentDate = new Date()
	const current = `${currentDate.getFullYear()}-${pad(currentDate.getMonth() + 1)}-${pad(currentDate.getDate())}`

	const age = birthDate > currentDate ? calculateDateDifference(current, birth) : calculateDateDifference(birth, current)

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
