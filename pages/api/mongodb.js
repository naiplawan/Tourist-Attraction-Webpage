import { MongoClient, ServerApiVersion } from 'mongodb';

export default async function handler(req, res) {

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const mongoUrl = process.env.NEXT_PUBLIC_MONGO_ATLAS_URL;
  const client = new MongoClient(mongoUrl, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    res.status(200).json({ message: "Successfully connected to MongoDB!" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
