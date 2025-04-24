
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/reports/latest?user=Test User`);
        setImageUrl(response.data.outputImageUrl);
      } catch (err) {
        console.error("Error fetching report", err);
      }
    };
    fetchReport();
  }, []);

  return (
    <div className="p-6 bg-slate-100">
      <h1 className="text-xl font-semibold mb-4">AI-Generated Report</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Report" className="rounded-lg shadow-md max-w-full" />
      ) : (
        <p className="text-gray-600">No report available.</p>
      )}
    </div>
  );
};

export default ReportDisplay;
