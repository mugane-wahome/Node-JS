import bcrypt from 'bcrypt'
import express from 'express'

const app = express()


app.use(express.json())

const users = [

]


app.post('/signup',async(req, res) =>{
    const { usename, password } = req.body
    const hash = await bcrypt.hash(password, 13)

    users.push({ 
        usename,
        password: hash 
    })

    console.log(users)  
    res.send('ok')
})
app.listen (3000, () => {
    console.log('server is running on port 3000')
})