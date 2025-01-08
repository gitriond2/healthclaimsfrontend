// pages/index.js
import React, { useState, useEffect } from 'react';
import { verifyClaims } from '../services/api';
import InfluencerList from '../components/InfluencerList';
import ResearchForm from '../components/ResearchForm';
import Layout from '../components/Layout';
import { fetchInfluencers } from '../services/fetchInfluencers';

export default function Home() {
  const [influencers, setInfluencers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInfluencers = async () => {
      try {
        const data = await fetchInfluencers();
        setInfluencers(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error);
      }
    };

    getInfluencers();
  }, []);

  const handleResearchSubmit = async (data) => {
    try {
      const response = await verifyClaims(data);
      console.log('Research data:', response);
      // Lógica adicional para manejar la respuesta
    } catch (error) {
      console.error('Error submitting research data:', error);
      setError(error);
    }
  };

  const filteredInfluencers = Array.isArray(influencers)
    ? influencers.filter(influencer =>
        influencer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Influenciadores</h1>
      <input
        type="text"
        className="p-2 border border-blue-300 rounded-md w-full mb-4 text-black"
        placeholder="Buscar influenciadores"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="bg-white p-4 rounded-md shadow-md text-black">
        <InfluencerList influencers={filteredInfluencers} />
      </div>
      <ResearchForm onSubmit={handleResearchSubmit} />
      {error && <div className="error">Error: {error.message}</div>}
    </Layout>
  );
}
