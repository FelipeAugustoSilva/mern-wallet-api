import mongoose from "mongoose";

export async function connectDb() {
    const mongoUrl = "mongodb+srv://admin:admin@dio-wallet-cluster.dqlxkdj.mongodb.net/?retryWrites=true&w=majority&appName=dio-wallet-cluster"

    try {
        await mongoose.connect(mongoUrl);
        console.log("MongoDB Atlas conectado")
    } catch(err) {
        console.log(err.message);
    }

}

export async function disconnectDb() {
    await mongoose.disconnect();
}