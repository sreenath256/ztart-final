import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InstaFeed() {
  const [images, setImages] = useState([]);
  const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your actual token

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me?fields=id,media.limit(12)&access_token=${accessToken}`
        );
        const media = response.data.media.data;
        setImages(media.map((item) => item.media_url));
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchImages();
  }, [accessToken]); // Run only when accessToken changes

  return (
    <div className="insta-feed">
      {/* {images.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="Instagram post" />
      ))} */}
    </div>
  );
}

export default InstaFeed;
