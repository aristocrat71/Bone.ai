import React, { useState } from 'react';
import { getLoggedInUsername } from '../utils/auth';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const [processedImageUrl, setProcessedImageUrl] = useState(null); 
  const userName = getLoggedInUsername();

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleUpload = async () => {
    if (!image) {
      setStatus("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('userName', userName);

    try {
      setStatus("Uploading...");
      const response = await fetch('http://localhost:8080/images/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImageUrl(imageUrl); 
      setStatus("Upload successful.");
      // navigate('/report');
    } catch (error) {
      setStatus("Upload failed.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-500" />
      <button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Upload
      </button>
      <p className="text-sm text-gray-700">{status}</p>

      {/* Show processed image if available */}
      {processedImageUrl && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Model Output</h3>
          <img
            src={processedImageUrl}
            alt="Processed X-ray"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
