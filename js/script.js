const calculateDateDifference = (start, end) => {
    let startYear = start.getFullYear()
    let startMonth = start.getMonth() + 1
    let startDay = start.getDate()

    let endYear = end.getFullYear()
    let endMonth = end.getMonth() + 1
    let endDay = end.getDate()

    let years = endYear - 1 - startYear
    let months = endMonth - 1 + 12 - startMonth
    let days = endDay - 1 + 31 - startDay
  
    if (days >= 31) {
        months++
        days -= 31
    }
    if (months >= 12) {
        years++
        months -= 12
    }

    return `${years}-${months}-${days}`
}

const calculateAge = (birthDate) => {
    let currentDate = new Date

    return calculateDateDifference(birthDate, currentDate)
}

const getAge = () => {
    let dateInput = document.getElementById("input")
    
    let birthDate = new Date(`${dateInput.value}T00:00:00.000`)

    let age = calculateAge(birthDate)

    let yearsOld = age.split("-")[0]
    let monthsOld = age.split("-")[1]
    let daysOld = age.split("-")[2]

    if (!isNaN(yearsOld) && !isNaN(monthsOld) && !isNaN(daysOld)) {
        document.getElementById("result").innerHTML = `${yearsOld} ${yearsOld != 1 ? " anos, " : "ano, "} ${monthsOld} ${monthsOld != 1 ? " meses e " : " mês e "} ${daysOld} ${daysOld != 1 ? " dias." : " dia."}`
        document.getElementById("result-area").style.display = "flex";
    } else {
        document.getElementById("result-area").style.display = "none";
    }
}
