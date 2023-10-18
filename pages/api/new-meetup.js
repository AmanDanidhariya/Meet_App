import { MongoClient } from "mongodb";
import { RSC } from "next/dist/client/components/app-router-headers";
// /api/new-meetup
//POST /api/new-meetup

async function handler(req , res){
    if(req.method === "POST"){
        const data = req.body;

        const client= MongoClient.connect('mongodb+srv://aman_danidhariya:tgz0q2F8ACMcbgit@cluster0.flbaqps.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne({data});

        console.log(result);

        client.close();

        res.status(201).json({message:"Meetup inserted!"})

    }
}
export default handler;