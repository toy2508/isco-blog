import express from 'express'
import logger from 'morgan'
import path from 'path'

const app = express();
app.use(logger('dev'))
app.set('/', path.join(__dirname, 'views')) //view 경로 설정
app.set('view engine', 'ejs') //view engine ejs 설정
app.engine('html', require('ejs').renderFile) //html 인식

app.get('/', (req, res) => {
    res.render('index.html', {
        title: "My Homepage",
        length: 5
    })
})

app.listen(3000, () => {
    console.log(`Sever Running at http://localhost:3000`)
})