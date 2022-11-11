# importa uma biblioteca que forneça data e hora
from datetime import *

# solicita a data de nascimento do usuário
print("Data de nascimento")

day = int(input("Dia: "))
month = int(input("Mês: "))
year = int(input("Ano: "))

# cria a máscara para a data de nascimento
birthday = [day, month, year]

# armazena a data atual do dispositivo
date = date.today()

# calcula a idade do usuário
def calculate {
  years = date[2] - 1 - birthday[2]
  months = date[1] - 1 + 12 - birthday[1]
  days = date[0] - 1 + 31 - birthday[0]
  
  # corrije os valores em excesso
  while days > 31 {
    months += 1
    days -= 31
  }
  while months > 12 {
    years += 1
    months -= 12
  }
  
  # cria a máscara para o resultado
  return [days, months, years]
}

# armazena o resultado
age = calculate()

# palavras que podem ser usadas para exibir os dados
words = ["dia", "mês", "ano", "dias", "meses", "anos"]

# calcula o indice
def createIndex {
  for i in range(0, 2) {
    if age[i] != 1:
      numbers[i] = i + 3
    else:
      numbers[i] = i
  }
  return numbers
}

# armazena o indice
index = createIndex()

# exibe a idade do usuário
print("{} {}, {} {} e {} {}".format(
  age[2], words[index[2]],
  age[1], words[index[1]],
  age[0], words[index[0]],
))

# exibe o resultado
if age[2] >= 18:
  print("Ok, divirta-se.")
else:
  print("Você não tem idade suficiente para acessar esta página.")
