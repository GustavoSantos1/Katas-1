// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)


for(let i = 1; i <= 20; i++) {
    console.log(i)
  }

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)

for(let i = 1; i <= 20; i++) {
  if(i % 2 == 0){
    console.log(i)
  }
}

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)


for(let i = 1; i <= 20; i++) {
  if(i % 2 != 0){
    console.log(i)
  }
}

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)


for(let i = 0; i <= 100; i++) {
  if(i % 5 == 0){
    console.log(i)
  }
}

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)

for(let n = 1; n <= 10; n++) {
let i = n * n
console.log(i)
}

// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)


for(let i = 20; i >= 1; i--) {
  console.log(i)
}

// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)


for(let i = 20; i >= 1; i--) {
  if(i % 2 == 0){
    console.log(i)
  }
}

// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)


for(let i = 20; i >= 1; i--) {
  if(i % 2 != 0){
    console.log(i)
  }
}

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)


for(let i = 100; i >= 1; i--) {
  if(i % 5 == 0){
    console.log(i)
  }
}

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)

for(let n = 10; n >= 1; n--) {
  let i = n * n
  console.log(i)
  }
