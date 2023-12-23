const express = require ('express')
const app = express ()
const PORT = 1999

app.listen(PORT, () => {
    console.log('connected Daddy')
})

// Greeting added
app.get('/greeting/:name', (req, res) => {
    const username = req.params.name
    res.send(`Wow! Hello there, ${username}`)
})

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send (`<h1> ${req.params.total * (req.params.tipPercentage * .01)} </h1>`)
})

// Magic 8 Ball

app.get('/greeting/:name', (req, res) => {
    const username = req.params.name
    res.send(`Wow! Hello there, ${username}`)
})