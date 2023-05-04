import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

const PORT : number = 8000

const API_KEY : string = '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'

const app: Application = express()
app.use(cors())
app.use(express.json())

const config = new Configuration({
    apiKey: API_KEY
})
const openai = new OpenAIApi(config)

app.post('/completions', async (req: Request, res: Response)=>{
    try{
        const completion= await openai.createChatCompletion({
            model:'gpt-4',
            messages: [{
                role: 'user', 
                content: 'create a SQL request to'+req.body.message}]
        })
        res.send(completion.data.choices[0].message)

    }catch(error){
        console.log(error)
        res.status(500).send('Server Error')
    }
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))