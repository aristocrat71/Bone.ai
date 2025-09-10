import React from 'react';
import ImageUploader from '../components/ImageUploader';

const Dashboard = () => {
  return (
    <div className="pt-20 px-4 min-h-screen bg-slate-100">
      <h2 className="text-2xl font-bold text-center mb-6">Upload Your X-ray</h2>
      <ImageUploader />
    </div>
  );
};

export default Dashboard;
