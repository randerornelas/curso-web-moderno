const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Middleware que provê os arquivos estáticos
app.use(express.static('.'))

// Se vier um submit de um formulário, este código vai ler os dados e transformar em objeto.
app.use(bodyParser.urlencoded({
    extended: true
}))

// Se vier um json, este código será aplicado para transformar o json em objeto.
app.use(bodyParser.json())

// Quando vier uma requisição no endereço /teste, chame a função.
app.get('/teste', (req, res) => res.send('Ok'))

// Usado para interpretar o formulário que veio o arquivo para upload
const multer = require('multer')

// Configura o nome padrão do arquivo a ser salvo
const storage = multer.diskStorage({
    // Define a pasta onde será salvo. No caso será a pasta atual '.'
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({
    storage
}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// Iniciando o servidor
app.listen(8080, () => console.log('Executando...'))