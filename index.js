import express, { json } from "express";

const app = express()
app.use(express.json())

app.get("/pets", (req, res) => {

    res.send("All the pets I loved before!") // in a brouser 
})

const PORT = 3030
app.listen(PORT, () => {
    console.log(`We are listening on port http://localhost:${PORT}/pets`)
})

export default app;