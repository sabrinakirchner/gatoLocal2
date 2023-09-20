import React from 'react';

export default function Cat({ likedPhotos, onDelete }) {


  // Pass the photo ID to the onDelete function
  const handleDelete = (photo) => {
    onDelete(photo.id); 
  };


  return (
    <div>
      <h1>Liked Photos</h1>
      <div className="liked-photos-container">
        {likedPhotos.map((photo) => (
          <div key={photo.id} className="liked-photo-card">
            <img src={photo.urls.regular} 
            alt={photo.description} 
            className="smaller-image" />
             <div className="button-container">
            <button onClick={() => handleDelete(photo)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}