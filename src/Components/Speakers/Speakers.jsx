import React, { useState, useEffect } from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader';

import faxios from '../../axios';

import './speakers.css';
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  const axios = faxios();
  const [state, setState] = useState({
    speakers: [],
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/speakers/full_list/');
      setState({
        speakers: data.sort((a, b) => b.year - a.year),
        loading: false,
      });
    };
    fetchData();
  }, []);

  const { speakers } = state;
  console.log(speakers);
  return (
    <div className="speakerContainer">
      <Sidebar />
      <h1 className="text-center text-white">Speakers</h1>
      <div className="speakers">
        {speakers.map((el) => (
          <SpeakerCard key={el.id} speakers={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;