import Head from 'next/head';
import { MongoClient } from 'mongodb'; // Import MongoClient
import App from './App.jsx';

export default function Home() {
  async function main() {
    const uri = "mongodb+srv://rachapholplo:<password>@cluster0.qm8qssu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
      await client.connect(); // Connect to the MongoDB cluster

      // Your MongoDB operations go here
      const database = client.db("Travel_Mockup");
      const collection = database.collection("MockUp_Data");
      const result = await collection.find({}).toArray();
      console.log(result);

    } catch (err) {
      console.error('An error occurred:', err);
    } finally {
      await client.close(); // Close the connection
    }
  }

  main().catch(console.dir);

  return (
    <div className="container">
      <Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/icons8-beach-umbrella-48.png" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap" rel="stylesheet" />
        <title>Travel Search</title>
      </Head>
      <main>
        <App />
      </main>
    </div>
  );
}
