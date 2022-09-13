from datetime import *

print("Data de nascimento")

birthday = int(input("Dia: "))
birthmonth = int(input("Mês: "))
birthyear = int(input("Ano: "))

birthdate = [birthday, birthmonth, birthyear]

date = date.today()

def calculate {
  year = date[2] - 1 - birthdate[2]
  month = date[1] - 1 + 12 - birthdate[1]
  day = date[0] - 1 + 31 - birthday[0]
  while day > 31 {
    month += 1
    day -= 31
  }
  return age
}
