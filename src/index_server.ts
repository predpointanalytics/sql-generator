import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'


const PORT : number = 8000


const API_KEY : string = process.env.REACT_APP_API_KEY || ''
console.log('akey',process.env.REACT_APP_API_KEY)


const app: Application = express()
app.use(cors())
app.use(express.json())

const configuration = new Configuration({
    apiKey: API_KEY
})
const openai = new OpenAIApi(configuration)

app.post('/completions', async (req: Request, res: Response)=>{
    console.log('entered server')
    console.log(req.body.message)
    
    try{
        console.log('before')
        const completion= await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
            messages: [{
                role: 'user', 
                content: 'create a SQL request to '+req.body.message
            }]
        })
        console.log('\n after!!!! \n')
        res.send(completion.data.choices[0].message)

    }catch(error){
        console.log(error)
        res.status(500)
    }
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))