//Os dois scripts do index e esse trecho a baixo, sao para conectar nosso projeto com o firebase
const firebaseConfig = {
  apiKey: "AIzaSyAupP0zsH4Q75atSnmV4shyGVlgIK7Q6zY",
  authDomain: "portfolio-3c4ae.firebaseapp.com",
  projectId: "portfolio-3c4ae",
  storageBucket: "portfolio-3c4ae.appspot.com",
  messagingSenderId: "293050619234",
  appId: "1:293050619234:web:c021f6dc48581af41d083b",
  measurementId: "G-CZ299T2BYV",
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

//
let conteudoProjetos = document.querySelectorAll(".conteudoProjetos")[0];
let subMenu = document.querySelectorAll(".subMenu")[0];
// Ler os dados de uma coleção
const db = firebase.firestore();

db.collection("portfolio")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      projetos = doc.data().projetos;

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
    });
  });
