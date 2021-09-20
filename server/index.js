const express = require('express');
const mysql2 = require('mysql2');
const app = express();
const cors = require('cors'); 

app.use(cors());
app.use(express.json())

const db = mysql2.createConnection({
   user: 'root',
   host: 'localhost',
   password: '1234567', 
   database: 'gazintech'
});

app.get('/developers', (req,res)=>{
    db.query('SELECT * FROM developers', 
            (err, result) => {
                if (err){
                    res.send('Erro na busca ' + err)
                }
                else {
                    res.send(result)
                }
                console.log(result)
            });
});

app.get('/developers/:id', (req,res)=>{
    const id = req.params.id;
    db.query('SELECT * FROM developers WHERE ID = ?',id, 
            (err, result) => {
                if (err){
                    res.send('Erro na busca ' + err)
                }
                else {
                    res.send(result)
                }
            });
}); 

app.post('/developers', (req, res)=> {
    const nome = req.body.nome;
    const sexo = req.body.sexo;
    const idade = req.body.idade;
    const hobby = req.body.hobby;
    const datanascimento = req.body.datanascimento;
    db.query(
        'INSERT INTO developers (nome,sexo,idade,hobby,datanascimento) VALUES (?,?,?,?,?)',
        [nome,sexo,idade,hobby,datanascimento],
        (err, result) =>{
            if (err){
                res.send('Erro na inserção ' + err)
            }else{
                res.send('Valores inseridos')
            }
            console.log(err + result)
        }
    );
});

app.post('/developers/:id', (req, res)=> {
    const id = req.params.id;
    const nome = req.body.nome;
    const sexo = req.body.sexo;
    const idade = req.body.idade;
    const hobby = req.body.hobby;
    const datanascimento = req.body.datanascimento;
    db.query(
        'UPDATE developers SET nome = ? ,sexo = ? ,idade = ? ,hobby = ?,datanascimento = ? WHERE id = ?',
        [nome,sexo,idade,hobby,datanascimento,id],
        (err, result) =>{
            if (err){
                res.send('Erro na inserção ' + err)
            }else{
                res.send('Valores inseridos')
            }
            console.log(err + result)
        }
    );
});


app.delete('/developers/:id', (req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM developers WHERE ID = ?',id, 
            (err, result) => {
                if (err){
                    res.send('Erro na remoção ' + err)
                }
                else {
                    res.send(result)
                }
            });
});

app.listen(3001, ()=>{
    console.log("Conexão estabelecida")
})