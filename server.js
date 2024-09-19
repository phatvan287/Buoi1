import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getPath from './getURL'
import getParamsURL from './getURL'
import viewEngine from './viewEngine'
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