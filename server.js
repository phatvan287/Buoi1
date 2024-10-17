import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date.js'
import getPath from './getURL.js'
import getParamsURL from './getURL.js'
import viewEngine from './viewEngine.js'
const app = express()
const port=process.env.port

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/about', (req,res) => {
    res.send('Hello World!. Page about')
})
app.get('/date', (req,res) => {
    res.send(myDateTime())
})
app.get('/getURL', (req,res) => {
    res.send(getPath())
})
app.get('/getURL', (req,res) => {
    res.send(getParamsURL())
})
app.get('/ejs', (req, res) => {
    res.render("test")
})
app.get('/', (req, res) => {
    res.render("home")
})
app.get('/about', (req, res) => {
    res.render("about")
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})