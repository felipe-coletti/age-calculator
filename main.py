# importe uma biblioteca que forneça data e hora
from datetime import *

# solicite a data de nascimento do usuário
print("Data de nascimento")

day = int(input("Dia: "))
month = int(input("Mês: "))
year = int(input("Ano: "))

# crie uma máscara para os dados de entrada
birthday = [day, month, year]

# armazene a data atual do dispositivo
date = date.today()

# trate os dados
def calculate {
  # calcule do maior para o menor e subtraia 1 da data atual
  years = date[2] - 1 - birthday[2]
  months = date[1] - 1 + 12 - birthday[1]
  days = date[0] - 1 + 31 - birthday[0]
  
  # corrija os valores em excesso
  while days > 31 {
    months += 1
    days -= 31
  }
  while months > 12 {
    years += 1
    months -= 12
  }
  
  # crie uma máscara para os dados tratados
  return [days, months, years]
}

# armazene os dados tratados
age = calculate()

# trate os dados
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

# armazene os dados tratados
index = createIndex()

# exiba o resultado do tratamento dos dados
print("{} {}, {} {} e {} {}".format(
  age[2], words[index[2]],
  age[1], words[index[1]],
  age[0], words[index[0]],
))

# você pode criar saídas diferentes para resultados diferentes
if age[2] >= 18:
  print("Ok, divirta-se.")
else:
  print("Você não tem idade suficiente para acessar esta página.")
