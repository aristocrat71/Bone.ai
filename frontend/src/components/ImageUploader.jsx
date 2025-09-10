import React, { useState } from 'react';
import { getLoggedInUsername } from '../utils/auth';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const [processedImageUrl, setProcessedImageUrl] = useState(null); 
  const [previewUrl, setPreviewUrl] = useState(null);
  const userName = getLoggedInUsername();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };
  

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

    } catch (error) {
      setStatus("Upload failed.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} className="hidden"
/>
      <label htmlFor="fileInput"
        className="block w-full text-center cursor-pointer px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 border border-dashed border-gray-400">
        {image ? image.name : 'Browse'}
      </label>

      {previewUrl && (
        <div className="text-center">
          <h3 className="text-sm text-gray-600 mb-1">Image Preview</h3>
          <img
            src={previewUrl}
            alt="Preview"
            className="rounded-md shadow-md max-w-full h-auto mx-auto"
          />
        </div>
      )}


      <button onClick={handleUpload} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
        Upload
      </button>
      <p className="text-sm text-gray-700">{status}</p>

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
