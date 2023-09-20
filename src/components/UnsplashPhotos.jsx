import React, { useState, useEffect } from 'react';
import { searchPhotos } from '../utilities/unsplash-api';


function UnsplashPhotos({likedPhotos, setLikedPhotos }) {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const handleLike = (photo) => {
    // Add the liked photo to the likedPhotos
    setLikedPhotos([...likedPhotos, photo]);
    console.log('Liked:', photo);
  };


  useEffect(() => {
    getRandomCatImages();
  }, []); // Empty dependency array to run only once when the component mounts



  // Function to fetch random cat images
  const getRandomCatImages = () => {
    searchPhotos('cats')
      .then((response) => {
        setPhotos(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching random cat photos:', error);
      });
  };



  return (
    <div className="unsplash-photos">
    <div className="search-bar-container"> 
      <input
        type="text"
        placeholder="Cats"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>

      <div className="photos-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img
              key={photo.id}
              src={`${photo.urls.regular}`}
              alt={photo.description}
              className="rounded-image"
              style={{ width: '200px', height: '200px' }}
            />
            {/* Like button that calls handleLike */}
            <button onClick={() => handleLike(photo)}>Like</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default UnsplashPhotos;