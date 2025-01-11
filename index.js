import express, { json } from "express"
import 'dotenv/config'

const app = express()

const port = process.env.PORT || 3000

// app.get("/", (req,res)=>{
//     res.send("Hello from Chitrita!")
// })

let teaData = []
let nextId = 1

app.listen(port, () => {
    console.log(`Server is running on the port: ${port}....`)
})

app.use(express.json())

app.post("/teas", (req, res) => {
    const { name, price } = req.body
    const newTea = { id: nextId++, name, price }
    teaData.push(newTea)
    res.status(200).send(newTea)
})

app.get("/teas", (req, res) => {
    res.status(200).send(teaData)
})

app.get("/teas/:id", (req, res) => {
const tea=req.find(t => t.id==parseInt(req.params.id))

if(!tea){
    return res.status(404).send('Tea not found')
}
res.status(200).send(tea)
})

//update

app.put('/teas/:id',(req,res)=>{
    const tea=req.find(t => t.id==parseInt(req.params.id))

    if(!tea){
        return res.status(404).send('Tea not found')
    }

    const {name,price}=req.body
    tea.name=name
    tea.price=priceres.status(200).send(tea)

})

//delete

app.delete('/teas/:id',(req,res)=>{
    const index=teaData.findIndex(t=>t.id==parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send('Tea not found')
    }
    teaData.splice(index,1)
    return res.status(204).send('Deleted')
})