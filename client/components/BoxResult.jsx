import { useState, useEffect } from "react";
import axios from "axios";
import boxresultstyles from "../styles/BoxResult.module.css";

function BoxResults({ value }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations(value);
  }, [value]);

  async function fetchLocations(keywords) {
    const uri = "mongodb+srv://rachapholplo:<password>@cluster0.qm8qssu.mongodb.net/?retryWrites=true&w=majority" 
    // Replace with your MongoDB Atlas URI
    const client = new MongoClient(uri);

    try {
      await client.connect();

      const database = client.db("Travel_Mockup");
      const collection = database.collection("MockUp_Data");
      const query = { /* ...your query object based on keywords */ };
      const result = await collection.find(query).toArray();

      setLocations(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      await client.close();
    }
  }


  return (
    <div className={boxresultstyles.boxResult}>
      {locations.map((item) => {
        return (
          <div className={boxresultstyles.locationList} key={item.eid}>
            <div className={boxresultstyles.rightBox}>
              <img className={boxresultstyles.bigThumbnail} src={item.photos[0]} alt="Thumbnail" width={400} height={385} />
            </div>
            <div className={boxresultstyles.tripInfoContainer}>
              <div className={boxresultstyles.tripTitle}>{item.title}</div>
              <div className={boxresultstyles.tripDescr}>{item.description.slice(0, 100)}</div>
              <div className={boxresultstyles.linkInfo}>
                <a href={item.url}>อ่านต่อ</a>
              </div>
              <div className={boxresultstyles.tagsBox}>
                {item.tags.map((tag, index) => (
                  <div key={index} className={boxresultstyles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className={boxresultstyles.thumbnailBox}>
                {item.photos.map((thumbnail, index) => (
                  <div className={boxresultstyles[`thumbnail-${index + 1}`]} key={index}>
                    <img className={boxresultstyles.imageBox} src={thumbnail} alt={`Thumbnail ${index + 1}`} width={200} height={150} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxResults;
