/* eslint-disable react/jsx-key */
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", type: "spring", delay: 0.5 },
  },
};

function Gallery() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "SMART INDIA HACKATHON",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image1.jpg?alt=media&token=f77118b9-5c4a-4535-8e26-8528c68f90f0",
      details:
        "YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nIDEA: Chatbot for medical prescriptions",
    },
    {
      id: 2,
      name: "CODING CONTEST",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image3.jpg?alt=media&token=3803ea48-f1b3-4afa-8991-e8d3ae841cf2",
      details:
        "YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nPLACE: 3rd place",
    },
    {
      id: 3,
      name: "SMART INDIA HACKATHON",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image1.jpg?alt=media&token=f77118b9-5c4a-4535-8e26-8528c68f90f0",
      details:
        "YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nIDEA: Chatbot for medical prescriptions",
    },
    {
      id: 4,
      name: "CODING CONTEST",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image3.jpg?alt=media&token=3803ea48-f1b3-4afa-8991-e8d3ae841cf2",
      details:
        "YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nPLACE: 3rd place",
    },
    {
      id: 5,
      name: "SMART INDIA HACKATHON",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image1.jpg?alt=media&token=f77118b9-5c4a-4535-8e26-8528c68f90f0",
      details:
        "YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nIDEA: Chatbot for medical prescriptions",
    },
  ];

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setShowDetails(true);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    setShowDetails(false);
  };
  return (
    <>
      <h1 className="text-5xl flex align-center justify-center mt-20 font-bold">
        Gallery
      </h1>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <h1 className="heading">Hackathon Winners</h1>
        {showDetails && selectedEvent && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
            onClick={closeEventDetails}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "80%",
                maxHeight: "80%",
                overflow: "auto",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>{selectedEvent.name}</h2>
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.name}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <div style={{ whiteSpace: "pre-line" }}>
                {selectedEvent.details}
              </div>
            </div>
          </div>
        )}

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {events.map((event) => (
            <SwiperSlide>
              <img
                key={event.id}
                src={event.imageUrl}
                alt={event.name}
                onClick={() => openEventDetails(event)}
              />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <h1 className="heading">Coding contest winners </h1>
        {showDetails && selectedEvent && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
            onClick={closeEventDetails}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "80%",
                maxHeight: "80%",
                overflow: "auto",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>{selectedEvent.name}</h2>
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.name}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <div style={{ whiteSpace: "pre-line" }}>
                {selectedEvent.details}
              </div>
            </div>
          </div>
        )}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {events.map((event) => (
            <SwiperSlide>
              <img
                key={event.id}
                src={event.imageUrl}
                alt={event.name}
                onClick={() => openEventDetails(event)}
              />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </motion.div>
    </>
  );
}

export default Gallery;
