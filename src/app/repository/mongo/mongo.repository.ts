import mongoose from 'mongoose';

async function findOneAndUpdate(document: string, find : object, update: any){
    return await mongoose.connection.db.collection(document).findOneAndUpdate(find,
        {
            $set: update,
        }, 
        {
            upsert: true 
        }
    );
}

export {
    findOneAndUpdate
}