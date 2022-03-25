const express = require("express")
const { randomUUID } = require("crypto")

const app = express()

app.use(express.json())

const products = []

app.post("/products", (req, res) => {

    const { name, price }  = req.body

    const product = {
        name,
        price,
        id:randomUUID(),
    }

    products.push(product)

    return res.json(product)
})

app.get("/products", (req, res) => {
    return res.json(products)
})

app.get("/products/:id", (req, res) => {
    const { id } = req.params
    const produtct  = products.find((product) => product.id === id)
    return res.json(produtct)
})

app.put("/products/:id", (req, res) => {
    const { id } = req.params
    const { name, price } = req.body

    const productIndex = products.findIndex(product => product.id === id)
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return res.json({message: "produto alterado com sucesso"})
})

app.delete("/products/:id", (req, res) => {
    const { id } = req.params

    const productIndex = products.findIndex(product => product.id === id)
    
    products.splice(productIndex, 1)
    
    return res.json({ message: "Produto removido com sucesso"})
})

app.listen(3001, () => console.log("Server is running port 3001"))
