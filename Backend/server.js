const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "sepema-razao.g.aivencloud.com",
    port: 10728,
    user: "avnadmin",
    password: "AVNS_szY4i4YDVP9zFe5p2ZI",
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: false
    }
});

app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando"
    })
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.post("/alunos", (req, res) => {

   const {
      nome_a,
      data_a,
      telefone_a,
      cpf_a,
      bairro,
      nome_p,
      cpf_p,
      numero_p,
      ano_l

   } = req.body;

   db.query(
      `INSERT INTO Matricula
      (nome_a, data_a, telefone_a, cpf_a, bairro,
      nome_p, cpf_p, numero_p, ano_l)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,

      [
         nome_a,
         data_a,
         telefone_a,
         cpf_a,
         bairro,
         nome_p,
         cpf_p,
         numero_p,
         ano_l

      ],

      (erro, resultado) => {

         if (erro) {

            console.log(erro);

            return res.status(500).json({

               erro: "Erro ao cadastrar"

            });

         }

         return res.status(201).json({

            mensagem: "Aluno cadastrado"

         });
      }
   );
});
 
 
app.get("/alunos", (req, res) => {
  db.query(
     "SELECT * FROM Matricula",
     (erro, alunos) => {
        if (erro) {
           console.log(erro);
           return res.status(500).json({
              erro: "Erro ao buscar alunos"
           });
        }
        return res.json(alunos);
     }
  );
});
 
app.delete("/alunos/:id", (req, res) => {
  const id = req.params.id;
  db.query(
     "DELETE FROM Matricula WHERE id = ?",
     [id],
     (erro) => {
        if (erro) {
           console.log(erro);
           return res.status(500).json({
              erro: "Erro ao remover"
           });
        }
        return res.json({
           mensagem: "Aluno removido"
        });
     }
  );
});;
 
app.put("/alunos/:id", (req, res) => {
  const id = req.params.id;
  db.query(
     "SELECT ativo FROM Matricula WHERE id = ?",
     [id],
     (erro, aluno) => {
        if (erro) {
           console.log(erro);
           return res.status(500).json({
              erro: "Erro ao buscar aluno"
           });
        }
        const novoStatus = !aluno[0].ativo;
        db.query(
           "UPDATE Matricula SET ativo = ? WHERE id = ?",
           [novoStatus, id],
           (erro) => {
              if (erro) {
                 console.log(erro);
                 return res.status(500).json({
                    erro: "Erro ao atualizar"
                 });
              }
              return res.json({
                 mensagem: "Aluno atualizado"
              });
           }
        );
     }
  );
});

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let tentativa = 0

app.post ("/admin", (req,res) => {
    const {senha} = req.body;

    if(!senha) {
        return res.status(400).json({
            erro: "Informe a senha."
        })
    }

    if(tentativa >= 3) {
        return res.status(403).json ({
            erro: "Bloqueado excesso de tentativas" 
        })
    }

    if (senha === "aquiseestuda"){
        tentativa = 0
        return res.json ({autenticado: true});
    }tentativa++

    return res.status(401).json({
        erro: "Senha incorreta"
    })
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~teste~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get("/quantidade", (req, res) => {
  db.query(
     "SELECT COUNT(*) AS total FROM Matricula",
     (erro, resultado) => {
        if (erro) {
           console.log(erro);
           return res.status(500).json({
              erro: "Erro ao contar alunos"
           });
        }
        return res.json({
           total: resultado[0].total
        });
     }
  );
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.listen(3000, () => {
    console.log("Servidor rodando em: ")
    console.log("http://localhost:3000")
})

