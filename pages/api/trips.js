import { MongoClient, ServerApiVersion } from 'mongodb';

export default async function handler(req, res) {
    const mongoUrl = process.env.NEXT_PUBLIC_MONGO_ATLAS_URL;
    let keywords = req.query.keywords;

    const mongodb = new MongoClient(mongoUrl, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

  if (keywords === undefined) {
    return res.status(400).json({
      message: "Please send keywords parameter in the URL endpoint",
    });
  }

  try {
    await mongodb.connect();
    const trips = await mongodb.db('Travel_MockUP').collection('MockUp_Data').find().toArray();
    
    const regexKeywords = keywords.split(" ").join("|");
    const regex = new RegExp(regexKeywords, "ig");
    const results = trips.filter((trip) => {
      return (
        trip.title.match(regex) ||
        trip.description.match(regex) ||
        trip.tags.filter((tag) => tag.match(regex)).length
      );
    });

    return res.json({
      data: results,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
