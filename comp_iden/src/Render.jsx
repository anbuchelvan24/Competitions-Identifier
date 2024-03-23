import React, { useEffect, useState } from 'react';
import Card from './components/Card';
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
    setSearchItem(searchInput)

    const filteredEvents = records.filter((record) => record.title.toLowerCase().includes(searchInput.toLowerCase()))
    setFilteredRecords(filteredEvents)
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchEvents();
        setRecords(response || []);
        setFilteredRecords(response || [])
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error (e.g., show error message to the user)
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchItem === '') setFilteredRecords(records)
  })

  console.log(records.length, filteredRecords.length)

  return (
    <>
      <div>
        <h1 className="mt-24 ml-6 mb-2 font-bold text-4xl">Technical events</h1>
      </div>
      <div className="background1" aria-hidden="true">
        <div className="gradient1" />
      </div>
      <div>
        <TextField sx={{width: '300px', ml: '40%'}} size='large' value={searchItem} onChange={handleInputChange} label="Search Events" variant="standard" />
      </div>
      <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="mt-20 card-container">
        {filteredRecords.map((record, index) => (
          <Card key={index} title={record.title} start={record.start} mode={record.mode} fees={record.fee} url={record.url} imgurl={record.imgurl} className="card" />
        ))}
      </motion.div>
      <div className="background2" aria-hidden="true">
        <div className="gradient2" />
      </div>
    </>
  );
}
