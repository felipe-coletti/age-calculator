const calculateDateDifference = (firstDate, secondDate) => {
    firstDate = firstDate.split("-")

    firstYear = parseInt(firstDate[0])
    firstMonth = parseInt(firstDate[1])
    firstDay = parseInt(firstDate[2])
    
    secondDate = secondDate.split("-")

    secondYear = parseInt(secondDate[0])
    secondMonth = parseInt(secondDate[1])
    secondDay = parseInt(secondDate[2])

    years = secondYear - 1 - firstYear
    months = secondMonth - 1 + 12 - firstMonth
    days = secondDay + 31 - firstDay
  
    if (days >= 31) {
        months++
        days -= 31
    }
    if (months >= 12) {
        years++
        months -= 12
    }

    return years.toString() + "-" + months.toString() + "-" + days.toString()
}

const calculateAge = (birthDate) => {
    currentDate = new Date()

    currentYear = currentDate.getFullYear()
    currentMonth = currentDate.getMonth() + 1
    currentDay = currentDate.getDate()
    
    currentDate = currentYear.toString() + "-" + currentMonth.toString() + "-" + currentDay.toString()

    return calculateDateDifference(birthDate, currentDate)
}

const getAge = () => {
    splitBirthDate = document.getElementById("input").value.split("-")

    birthYear = splitBirthDate[0]
    birthMonth = splitBirthDate[1]
    birthDay = splitBirthDate[2]

    if (!isNaN(birthYear) && !isNaN(birthMonth) && !isNaN(birthDay)) {
        splitAge = calculateAge(document.getElementById("input").value).split("-")

        yearsOld = splitAge[0]
        monthsOld = splitAge[1]
        daysOld = splitAge[2]

        document.getElementById("result").innerHTML = yearsOld + (yearsOld != 1 ? " anos, " : "ano, ") + monthsOld + (monthsOld != 1 ? " meses e " : " mês e ") + daysOld + (daysOld != 1 ? " dias." : " dia.")
        document.getElementById("result-area").style.display = "flex";
    } else {
        document.getElementById("result-area").style.display = "none";
    }
}
