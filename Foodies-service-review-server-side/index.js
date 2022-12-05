const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 2000 ;


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyj8wdj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




const verifyJWT = (req, res, next) => {

     const authHeader = req.headers.authorization;
     if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized access' })
     }
     const token = authHeader.split(' ')[1];
     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
         if (err) {
             return res.status(401).send({ message: 'unauthorized access' })
         }
         req.decoded = decoded;
         next();
     })
}


//db connection

const run = async() =>{
    try{


        //databage table
        const serviceCollection = client.db("Foodie").collection("services");
        const reviewCollection = client.db("Foodie").collection("review");
        




        //JWT  Token
        app.post('/jwt', (req, res) =>{
            console.log(req.body);
            const user  = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"2 days"})
            res.send({token})
        })

        //service all data load
        app.get('/services', async(req, res)=>{
            const query = {};
            const cursor = serviceCollection.find(query).sort({ time:-1});
            const services = await cursor.toArray();
            res.send(services);
        })

        //homepage service load

        app.get('/serviceshome', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query).sort({_id:-1});
            const services = await cursor.limit(3).toArray()
            res.send(services)
        })

        //find service for spacipic service 

        app.get('/services/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query)
            res.send(service)
        })


        // add new service
        app.post('/services', async(req, res)=>{
            const service = req.body;
            const result = await serviceCollection.insertOne(service);
            res.send(result)
        })

        // add new review

        app.post('/review', async(req, res)=>{
            const review = req.body;
            const result = await reviewCollection.insertOne(review);
            res.send(result)
        })



        // get all review  

        app.get('/review', verifyJWT, async(req, res)=>{

            //JWT  Token

             const decoded = req.decoded;
             console.log('inside orders api', decoded);
             if (decoded.email !== req.query.email) {
                return res.status(403).send({ message: 'unauthorized access' })
             }
            
            let query = {}
            if(req.query.email){
                query ={
                    email: req.query.email
                }
            }
            const cursor = reviewCollection.find(query).sort({_id:-1})
            const review = await cursor.toArray()
            res.send(review)
        })
        app.get('/detailreview',  async(req, res)=>{
            
            if(req.query.serviceId){
                query ={
                    serviceId: req.query.serviceId
                }
            }
            const cursor = reviewCollection.find(query).sort({_id:-1})
            const review = await cursor.toArray()
            res.send(review)
        })

        


         //delete review

         app.delete('/delete/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await reviewCollection.deleteOne(query);
            console.log(result)
            res.send(result);
        })

        //get review usign id
        app.get('/review/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const review = await reviewCollection.findOne(query)
            res.send(review)
        })



        app.put('/review/:id' , async(req, res) => {
            const id = req.params.id;
            const filter = {_id : ObjectId(id)};
            const details = req.body;
            const option = {upsert: true};
            const updatedUser = {
                $set: {
                    comment: details.comment
                }
            }
            const result = await reviewCollection.updateOne(filter, updatedUser, option );
            res.send(result);
        })




        //review for home
        app.get('/reviewhome', async (req, res) => {
            const query = {};
            const cursor = reviewCollection.find(query).sort({_id:-1});
            const services = await cursor.limit(2).toArray()
            res.send(services)
        })

         
    
    }
    finally{

    }
}
run().catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('Hello Niloy');
});



app.listen(port, ()=>{
    console.log( `simple server running on prot ${port}`);
})
