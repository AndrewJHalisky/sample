/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express")

const app = express()

/* ******************************************
 * Default GET route
 * ***************************************** */
app.get("/", (req, res) => {res.send("Welcome home!")})

app.get('/test', (req, res) => {
    return res.send('<script>console.log("Hello world!")</script>')
})

// From practice folder

/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = 'localhost'
const PORT = 3000

/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
    })
