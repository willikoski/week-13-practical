const express = require ('express')
const app = express ()
const PORT = 1999

app.listen(PORT, () => {
    console.log('connected Daddy')
})

app.get('/greeting/:name', (req, res) => {
    const username = req.params.name
    res.send(`Wow! Hello there, ${username}`)
})

