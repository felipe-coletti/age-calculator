# importe uma biblioteca que forneça data e hora
from datetime import *

# solicite a data de nascimento do usuário
print("Data de nascimento")

day = int(input("Dia: "))
month = int(input("Mês: "))
year = int(input("Ano: "))

# crie uma máscara para os dados
birthday = [day, month, year]

# armazene a data atual do dispositivo
date = date.today()

def calculate {
  '''
  Calcule ano, mês e dia (nessa ordem) para não se
  preocupar com o valor de uma unidade maior quando
  for calcular a unidade menor.
  '''
  years = date[2] - 1 - birthday[2]
  months = date[1] - 1 + 12 - birthday[1]
  days = date[0] - 1 + 31 - birthday[0]
  while days > 31 {
    months += 1
    days -= 31
  }
  while months > 12 {
    years += 1
    months -= 12
  }
  return [days, months, years]
}

age = calculate()

words = ["dia", "mês", "ano", "dias", "meses", "anos"]

def createIndex {
  for i in range(0, 2){
    if age[i] != 1:
      numbers[i] = i + 3
    else:
      numbers[i] = i
  }
  return numbers
}

index = createIndex()

print("{} {}, {} {} e {} {}".format(
  age[2], words[index[2]],
  age[1], words[index[1]],
  age[0], words[index[0]],
))

if age[2] >= 18:
  print("Ok, divirta-se.")
else:
  print("Você não tem idade suficiente para acessar esta página.")
