
import './App.css';
import Home from './pages/Home';
import Cat from './pages/Cat';
import AuthPage from './pages/AuthPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
  const [User, setUser] = useState()
  const [likedPhotos, setLikedPhotos] = useState([]); // Define likedPhotos state 


  const handleDelete = (photoId) => {
    // Filter out the liked photo with the given ID
    const updatedLikedPhotos = likedPhotos.filter((photo) => photo.id !== photoId);
    setLikedPhotos(updatedLikedPhotos);
  };

      return (
        <div className="App">
          {User ? (
            <BrowserRouter>
              <NavBar />
              <Routes>
              <Route
              path="/orders/new"
              element={<Home likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}  />}
            />
                <Route
              path="/orders/liked"
              element={<Cat likedPhotos={likedPhotos} onDelete={handleDelete}/>}
            />
                <Route path="/*" element={<Navigate to="/orders/new" />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <AuthPage setUser={setUser} />
          )}
        </div>
      );
    }
    
    export default App;