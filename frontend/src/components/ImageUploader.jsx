import React, { useState } from 'react';
import axios from 'axios';
import { getLoggedInUsername } from '../utils/auth'; 

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const userName = getLoggedInUsername(); 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      setStatus("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('userName', userName); // auto-injected

    try {
      setStatus("Uploading...");
      const response = await axios.post('http://localhost:8080/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatus(`Upload successful: ${response.data.message}`);
    } catch (error) {
      setStatus("Upload failed.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} style={{ marginTop: '10px' }}>
        Upload
      </button>
      <p>{status}</p>
    </div>
  );
};

export default ImageUploader;
