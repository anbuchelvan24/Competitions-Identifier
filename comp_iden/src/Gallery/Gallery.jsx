/* eslint-disable react/jsx-key */
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { fetchGalleryEvents } from "../DataHandling";
const fadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", type: "spring", delay: 0.5 },
  },
};

function Gallery() {
  const [events, setEvents] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setShowDetails(true);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    setShowDetails(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGalleryEvents();
        setEvents(response || []);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error (e.g., show error message to the user)
      }
    };

    fetchData();
  },[])

  console.log(events)

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
              <h2 style={{ marginBottom: "10px" }}>{selectedEvent.title}</h2>
              <img
                src={selectedEvent.imgUrl}
                alt={selectedEvent.title}
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
                src={event.imgUrl}
                alt={event.title}
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
              <h2 style={{ marginBottom: "10px" }}>{selectedEvent.title}</h2>
              <img
                src={selectedEvent.imgUrl}
                alt={selectedEvent.title}
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
                src={event.imgUrl}
                alt={event.title}
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
