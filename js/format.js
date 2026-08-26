export const formatAge = ({ years, months, days }) =>
	`${years} ${years !== 1 ? 'anos' : 'ano'}, ${months} ${months !== 1 ? 'meses' : 'mês'} e ${days} ${days !== 1 ? 'dias' : 'dia'}.`

export const pad = n => String(n).padStart(2, '0')