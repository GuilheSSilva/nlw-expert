const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores e tipos",
        "Atribui um valor a uma variável",
        "Compara apenas valores"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "32",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor constante",
        "Um objeto",
        "Um contêiner para armazenar dados"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array",
        "Cria um novo array",
        "Remove elementos de um array"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "const myVar = 10",
        "variable myVar = 10",
        "let myVar: 10"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um loop",
        "Um bloco de código reutilizável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '10' == 10 em JavaScript?",
      respostas: [
        "true",
        "false",
        "Erro"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de ordenação de arrays",
        "Uma estrutura de dados usada para armazenar informações",
        "Uma interface que representa a estrutura de uma página web"
      ],
      correta: 2
    },
    {
      pergunta: "Como você faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha",
        "<!-- Este é um comentário de linha -->",
        "/* Este é um comentário de linha */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adiciona um novo elemento ao DOM",
        "Define um manipulador de eventos para um elemento",
        "Remove um elemento do DOM"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const templete = document.querySelector('template')
  
  const corretas = new(Set)
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas){
    const quizItem = templete.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    
    //colaca a pergunta na tela
    quiz.appendChild(quizItem)
  }