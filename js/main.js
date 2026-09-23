import { calculateDateDifference } from './dateDifference.js'
import { formatAge, pad } from './format.js'

const form = document.getElementById('form')
const input = document.getElementById('input')
const resultArea = document.getElementById('result-area')
const resultElement = document.getElementById('result')

form.addEventListener('submit', e => {
	e.preventDefault()

	const birth = input.value
	const birthDate = new Date(birth)
	const currentDate = new Date()
	const current = `${currentDate.getFullYear()}-${pad(currentDate.getMonth() + 1)}-${pad(currentDate.getDate())}`

	const age = birthDate > currentDate ? calculateDateDifference(current, birth) : calculateDateDifference(birth, current)

	if (!isNaN(age.years) && !isNaN(age.months) && !isNaN(age.days)) {
		resultElement.textContent = birthDate > currentDate ? `Faltam ${formatAge(age)}` : formatAge(age)
		resultArea.hidden = false
	} else {
		resultElement.textContent = ''
		resultArea.hidden = true
	}
})