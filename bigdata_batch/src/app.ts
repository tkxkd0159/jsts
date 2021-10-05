import express from 'express';
import cors from 'cors';

import {mgConnectToColl} from './lib/mongo';

const PORT = 3000

async function initExpress(collection: any){
    let c = collection;

    const app = express();
    app.use(cors())
    app.use(express.urlencoded({ extended: true })); // Extract body data from POST
                                                     // allow nested object with 'extended' option
    app.use(express.json());  // Parse JSON request body

    app.get('/', (req: any, res) => {res.json({message: 'This is large user list'})})
    app.get('/about', (req: any, res) => {res.send('This is large user list')})
    app.get('/users/:skip/:limit', async (req, res) => {
        const {skip, limit} = req.params
        const cursor = await c.find({}).sort({name: 1}).skip(parseInt(skip)).limit(parseInt(limit))
        let result = await cursor.toArray();
        res.json(result);
    })

    app.listen(PORT, () => (console.log(`Listening at http://localhost:${PORT}`)))
}

(async function(){
    let user_coll = await mgConnectToColl();
    initExpress(user_coll);
})();


