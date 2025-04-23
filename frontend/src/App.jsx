import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: '20px' }}>
        <h2>Upload your X-ray</h2>
        <ImageUploader />
      </div>
    </div>
  );
}

export default App;
