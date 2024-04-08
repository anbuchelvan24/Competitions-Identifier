import React, { useEffect, useState } from 'react';
import Card from './components/cardu';
import { motion } from 'framer-motion';
import './Render.css'; // Import CSS file
import { TextField } from '@mui/material';
import { fetchEvents } from './DataHandling';

const fadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeIn', type: 'spring', delay: 0.5 },
  },
};

export default function Render() {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (e) => {
    const searchInput = e.target.value;
    setSearchItem(searchInput);

    const filteredEvents = records.filter((record) =>
      record.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRecords(filteredEvents);
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetchEvents();
            if (!Array.isArray(response)) {
                throw new Error('Invalid response format: Expected an array');
            }
            // Sort records based on start date
            const sortedRecords = response.sort((a, b) => new Date(a.start) - new Date(b.start));
            setRecords(sortedRecords || []);
            setFilteredRecords(sortedRecords || []);
        } catch (error) {
            console.error('Error fetching and sorting events:', error);
            // Handle error (e.g., show error message to the user)
        }
    };

    fetchData();
}, []);


  useEffect(() => {
    if (searchItem === '') setFilteredRecords(records);
  }, [searchItem, records]);

  return (
    <div className='renderpage'>
      <div>
        <h1 className="mt-24 ml-6 mb-2 font-bold text-4xl">Technical events</h1>
      </div>
      <div className="background1" aria-hidden="true">
        <div className="gradient1" />
      </div>
      <div>
      <input
  className='searchbar'
  role='search-box'
  sx={{
    width: '300px',
    padding: '3rem 3rem',
    height: '70px',
    ml: '40%',
    textAlign: 'center',
    '& input': { fontFamily: 'Poppins', fontSize: '20px' },
    '& input::label': { fontFamily: 'Poppins', fontSize: '20px' }
  }}
  size="large"
  value={searchItem}
  onChange={handleInputChange}
  label="Search"
  variant="filled"
  placeholder="Search Events"
  
/>

      </div>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-20 card-container"
      >
        {filteredRecords.map((record, index) => (
          <Card
            key={index}
            title={record.title}
            start={record.start}
            mode={record.mode}
            fees={record.fee}
            url={record.url}
            imgurl={record.imgurl}
            className="card"
          />
        ))}
      </motion.div>
      <div className="background2" aria-hidden="true">
        <div className="gradient2" />
      </div>
    </div>
  );
}
