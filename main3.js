const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())
app.get('/', function (req, res) {
    res.send('<h1>선린 인터넷고등학교입니다.</h1>')
})
app.get('/:name', function (req, res) {
    const p = req.params
    //res.json({'infor':p.name}) // http://localhost:3000/dong
    // const q = req.query
    // res.json({'infor':q.name})   // http://localhost:3000/a?name=dong&age=20
    if (p.name==="김동연"){
        res.json({'infor':'2-1 담임'}) 
    }else if (p.name==="이영기"){
        res.json({'infor':'2-2 담임'}) 
    }
    else if (p.name==="김주영"){
        res.json({'infor':'2-3 담임'}) 
    }
    else if (p.name==="김민기"){
        res.json({'infor':'2-1 부담임'}) 
    }
    else{
        res.json({'infor':'정보 없음'}) 
    }
})
// app.get('/dong', function (req, res) {
//     res.json({'infor':'2-1 담임'})
// })
// app.get('/young', function (req, res) {
//     res.json({'infor':'2-2 담임'})
// })
// app.get('/joo', function (req, res) {
//     res.json({'infor':'2-3 담임'})
// })
// app.get('/min', function (req, res) {
//     res.json({'infor':'2-1 부담임'})
// })

app.listen(port, () => {
    console.log(`server running on Port ${port}`)
})