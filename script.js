let projetos = [
  {
    nome: "Clima",
    description:
      "Identifica a temperatura da cidade desejada, projeto usando API.",
    link: "https://luizcavalcantte.github.io/Clima-weather-API/",
    img: "https://user-images.githubusercontent.com/85976619/130358724-625a1786-0cef-4c7c-ab40-b15b6a227de8.gif",
  },
  {
    nome: "Calculador de gorjeta",
    description:
      "Calcula o valor da gorjeta de acordo com a porcentagem desejada.",
    link: "https://luizcavalcantte.github.io/calculador-de-gorjeta/",
    img: "https://user-images.githubusercontent.com/85976619/133871940-6ebdedf1-d35b-4d55-a95d-4c7eeb7ce699.gif",
  },
  {
    nome: "Formulário simples",
    description: "Um formulário de cadastro usando API de CEP ",
    link: "https://luizcavalcantte.github.io/formulario-API-cep/",
    img: "https://user-images.githubusercontent.com/85976619/130341873-688931d0-2eda-41f1-9e72-f6fe984831fc.gif",
  },
  {
    nome: "Números da sorte",
    description:
      "Sorteia números aleatorios de 1 á 60, pode sortear apenas um, ou os seis numeros de uma vez.",
    link: "https://luizcavalcantte.github.io/numeros-da-sorte/",
    img: "https://user-images.githubusercontent.com/85976619/129606409-bb138d45-8d9c-42ab-8b69-4a7e8cfca0c3.gif",
  },
  {
    nome: "Relógio",
    description: "Relógio simples, feito pra testar CSS dentro do JS.",
    link: "https://luizcavalcantte.github.io/relogio/",
    img: "https://user-images.githubusercontent.com/85976619/133872009-266fe470-af11-48be-838a-576a5f10b9f3.gif",
  },
  {
    nome: "Gerenciador de clientes",
    description:
      "CRUD simples em local storage pra gerenciamento de dados de clientes.",
    link: "https://luizcavalcantte.github.io/CRUD-localstorage/",
    img: "https://user-images.githubusercontent.com/85976619/131186266-1652e0a9-da16-4fb0-a457-12e763852b13.gif",
  },
  {
    nome: "Jogo da velha",
    description:
      "Verção do jogo da velha do curso, agora feito sozinho pra testar o meus conhecimentos.",
    link: "https://luizcavalcantte.github.io/jogo-da-velha-feito-sozinho/",
    img: "https://user-images.githubusercontent.com/85976619/130868908-bce6d7d1-eef0-487a-877a-072ac0f3e41a.gif",
  },
  {
    nome: "índice de massa corporal",
    description: "Um IMC simples.",
    link: "https://luizcavalcantte.github.io/indice-massa-corporal/",
    img: "https://user-images.githubusercontent.com/85976619/133872217-b075475a-5064-4986-ac64-abe69723b2e0.gif",
  },
  {
    nome: "Cronômetro",
    description: "Um cronômetro simples com iniciar, pausar e zerar.",
    link: "https://luizcavalcantte.github.io/Cronometro/",
    img: "https://user-images.githubusercontent.com/85976619/133872257-8d42a707-2a0e-4d77-80d3-eb42b726c550.gif",
  },
  {
    nome: "Churrascometro",
    description:
      "Calcula a quantidade de carne e bebida de um churrasco, de acordo com a quantidade de pessoas e o tempo do evento.",
    link: "https://luizcavalcantte.github.io/churrascometro/",
    img: "https://user-images.githubusercontent.com/85976619/133872327-e84b1a03-60ca-417f-a7ad-c5b30521145f.gif",
  },
  {
    nome: "Calculadora",
    description: "Calculadora simples.",
    link: "https://luizcavalcantte.github.io/calculadora/",
    img: "https://user-images.githubusercontent.com/85976619/133872384-cd95316c-cd6c-4f54-822c-bf6f27d1c372.gif",
  },
  {
    nome: "Lista de tarefas",
    description:
      "Lista de tarefas simples, cria tarefa, marca se está concluida e apaga.",
    link: "https://luizcavalcantte.github.io/to-do-list/",
    img: "https://user-images.githubusercontent.com/85976619/130679954-74b50e88-d49e-4a1e-ae87-5a74e0defd8e.gif",
  },
  {
    nome: "Jogo da memória",
    description:
      "Verção do jogo da memória do curso, agora feito sozinho pra testar meus conhecimentos.",
    link: "https://luizcavalcantte.github.io/jogo-da-memoria-feito-sozinho/",
    img: "https://user-images.githubusercontent.com/85976619/131564503-3ef8046c-cbd2-4569-96c2-2315e1dba067.jpg",
  },
  {
    nome: "Card de resumo",
    description: "Card de resumo de uma compra.",
    link: "https://luizcavalcantte.github.io/Frontend-Mentor-Order-summary/",
    img: "https://user-images.githubusercontent.com/85976619/133000520-288382da-f53f-42e2-a542-5f1af81a6fd1.jpg",
  },
  {
    nome: "Jogo da memória",
    description: "Jogo da memória feito em um curso.",
    link: "https://luizcavalcantte.github.io/jogo-da-memoria-curso/",
    img: "https://user-images.githubusercontent.com/85976619/133872137-f7e8f8b4-6a8d-407e-9703-69ca44e7207d.jpg",
  },
  {
    nome: "Jogo da velha",
    description: "Jogo da velha feito em um curso.",
    link: "https://luizcavalcantte.github.io/jogo-da-velha-curso/",
    img: "https://user-images.githubusercontent.com/85976619/133872107-c7600fd8-29d2-4659-9877-8e47b832b06c.jpg",
  },
  {
    nome: "Página de captura",
    description: "Página de captura feito em um curso.",
    link: "https://luizcavalcantte.github.io/pagina-de-captura/",
    img: "https://user-images.githubusercontent.com/85976619/133872065-5a156492-7d80-4a57-b706-ef98ab7771f9.jpg",
  },
  {
    nome: "Pedra papel tesoura",
    description: "jogo classico",
    link: "https://luizcavalcantte.github.io/Pedra-papel-tesoura/",
    img: "https://user-images.githubusercontent.com/85976619/137576246-083d7fe4-5126-437b-abf8-718b4535e9ff.jpg",
  },
];
//pensando em colocar PROJETOS em um json e tirar essa bagunça daqui...

let conteudoProjetos = document.querySelectorAll(".conteudoProjetos")[0];
let subMenu = document.querySelectorAll(".subMenu")[0];

function adicionarProjetos() {
  try {
    for (let i = 0; i < projetos.length; i++) {
      conteudoProjetos.innerHTML += `<a href="${projetos[i].link}"
              ><div class="card">
                <img
                  src="${projetos[i].img}"
                  alt="${projetos[i].nome}"
                />
                <div class="container">
                  <h4>${projetos[i].nome}</h4>
                  <p>
                    ${projetos[i].description}
                  </p>
                </div>
              </div></a
              >`;
    }
  } catch (error) {
    //adicionar uma opção caso houver erro, ta dando erro na pagina principal
  }
}

function adicionarSubMenu() {
  for (let i = 0; i < projetos.length; i++) {
    subMenu.innerHTML += `<li>
    <a
      href="${projetos[i].link}"
      >${projetos[i].nome}</a
    >
  </li>`;
  }
}
//da pra remover o try catch da function adicionarProjetos apenas mudando as ordens das funçoes a baixo, mais preferi deixar assim pra nao correr nenhum risco
adicionarProjetos();
adicionarSubMenu();
