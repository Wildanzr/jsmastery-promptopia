import mongoose from 'mongoose'

const DB_URL = process.env.MONGO_URI || 'localhost:27017'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('Mongoose is already connected')
    return
  }

  try {
    await mongoose.connect(DB_URL, {
      dbName: 'shareprompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {}
}
