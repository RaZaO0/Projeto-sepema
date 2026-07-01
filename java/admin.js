const API = "http://localhost:3000";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

async function cadastrarAluno(event) {
    event.preventDefault();
    console.log("JS carregou0");

    //definindo as variaveis 

    const nome_a = document.getElementById("nome_a").value;
    const data_a = document.getElementById("data_a").value;
    const telefone_a = document.getElementById("telefone_a").value;
    const cpf_a = document.getElementById("cpf_a").value;
    const bairro = document.getElementById("bairro").value;
    const nome_p = document.getElementById("nome_p").value;
    const cpf_p = document.getElementById("cpf_p").value;
    const numero_p = document.getElementById("numero_p").value;
    const ano_l = document.getElementById("nivel").value;

    //agrupando tudo em um só
    const alunonv = {nome_a, data_a, telefone_a, cpf_a, bairro, nome_p, cpf_p, numero_p, ano_l}

    try {
        const resposta = await fetch(`${API}/alunos`, {
            method: "POST", //
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alunonv)
    });
    console.log("JS carregou4");
 
    const dados = await resposta.json();
 
    if (!resposta.ok) {
        alert(dados.erro);
        return;
    }
    alert("Aluno cadastrado com sucesso");
   
    } catch (erro) {
        console.log(erro);
    }
}

async function carregarAlunos() {
    console.log("JS carregou1");
    const lista = document.getElementById("lista");
 
    if (!lista) return;
    try {
        const resposta = await fetch(`${API}/alunos`);
        const alunos = await resposta.json();
        lista.innerHTML = ""
        console.log("JS carregou2");
 
        for (let aluno of alunos) {
            lista.innerHTML += `
            <div class="aluno">
            <div id="divnomeADMIN"><h2 id="nomeAlunoADMIN">${aluno.nome_a}</h2></div>
            <p class="padimin">Idade: ${
                new Date(aluno.data_a).toLocaleDateString("pt-BR")
            }</p>
            <p class="padimin">cpf: ${aluno.cpf_a}</p>
            <p class="padimin">nivel: ${aluno.ano_l}</p>
            <p class="padimin">Status: ${aluno.ativo ? "Ativo" : "Inativo"} </p>
            <br>
            <button onclick="alterarStatus(${aluno.id})" id="botaoADmin">Alterar Status </button>
 
            <button onclick="removerAluno(${aluno.id})" id="botaoADmin">Remover</button>
            </div>
            `
        }
 
    } catch (erro) {
        console.log(erro)
    }
}

async function removerAluno(id) {
    await fetch(`${API}/alunos/${id}`, {
        method: "DELETE"
    })
    carregarAlunos();
}
 
async function alterarStatus(id) {
    await fetch(`${API}/alunos/${id}`, {
        method: "PUT"
    })
    carregarAlunos();
}

function logoutAdmin() {
    sessionStorage.removeItem("admin_logado");
    window.location.reload();
}

carregarAlunos();
console.log("Veio ate aq3333")




//--------------------------------------------------------------------------------

async function carregartotal() {

    const resposta = await fetch(`${API}/quantidade`);

    const dados = await resposta.json();

    document.getElementById("total").innerHTML =
        `Total de alunos: ${dados.total}`;
        
}
carregartotal()
console.log("Veio ate aq")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




async function autenticar(event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;

    try {
        const resposta = await fetch(`${API}/admin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ senha })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro);
            return;
        }

        sessionStorage.setItem("admin_logado", "true");

        verificar();

    } catch (erro) {
        console.log("Erro na hora de verificar", erro);
    }
}

const loginadm = document.getElementById("login");
const conteudoadm = document.getElementById("conteudoAdm");

function verificar() {

    if (!loginadm || !conteudoadm) return;

    if (sessionStorage.getItem("admin_logado") === "true") {

        loginadm.style.display = "none";
        conteudoadm.style.display = "block";

    } else {

        loginadm.style.display = "block";
        conteudoadm.style.display = "none";
    }
}


document.getElementById("formLogin")
.addEventListener("submit", autenticar);


verificar();