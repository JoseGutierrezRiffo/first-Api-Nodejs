import MongoClient from "mongodb";
require("dotenv").config();

export async function connect() {
  try {
    const client = await MongoClient.connect(process.env.DB_HOST, {
      useUnifiedTopology: true
    });
    const db = client.db(process.env.DB_NAME);
    console.log("DB is connected");
    return db;
  } catch (e) {
    console.log(e);
  }
}
