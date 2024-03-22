import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import fetchEvents from './DataHandling';
import { motion } from 'framer-motion';
import './Render.css'; // Import CSS file

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchEvents();
        setRecords(response || []);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error (e.g., show error message to the user)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="mt-24 ml-6 mb-2 font-bold text-4xl">Technical events</h1>
      </div>
      <div className="background1" aria-hidden="true">
        <div className="gradient1" />
      </div>
      <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="mt-20 card-container">
        {records.map((record, index) => (
          <Card key={index} title={record.title} start={record.start} mode={record.mode} fees={record.fee} url={record.url} imgurl={record.imgurl} className="card" />
        ))}
      </motion.div>
      <div className="background2" aria-hidden="true">
        <div className="gradient2" />
      </div>
    </>
  );
}
