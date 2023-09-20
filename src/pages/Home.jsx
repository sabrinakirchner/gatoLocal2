import React from 'react';
import UnsplashPhotos from '../components/UnsplashPhotos';

export default function Home({ likedPhotos, setLikedPhotos }) {
  return (
    <div>
      <h1></h1>
      {/* Like button */}
      <UnsplashPhotos likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
    </div>
  );
}
