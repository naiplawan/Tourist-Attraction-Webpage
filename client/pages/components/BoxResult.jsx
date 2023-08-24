import { useState, useEffect } from "react";
import axios from "axios";
import boxresultstyles from "../../styles/BoxResult.module.css";

function BoxResults({ value }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    handleSearch(value);
  }, [value]);

  const getLocationData = async () => {
    try {
      console.log('Searching for:', value); 
      const result = await axios.get(`/api/trips?keywords=${value}`);
      setLocations(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (searchValue) => {
    console.log('handleSearch:', searchValue);
    getLocationData(searchValue);
  };



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
