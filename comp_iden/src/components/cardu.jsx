import React, { useState } from "react";
import PropTypes from "prop-types";
import DemoImage from "../assets/demo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
import axios from "axios";
import {
  faCalendarDays,
  faHeart,
  faIndianRupeeSign,
  faLocationDot,
  faMoneyBill,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Details";
// import moment from "moment";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  };

  const handleInterested = async (e) => {

    e.preventDefault();

    // Trigger in-app notification    
     try {
      const response = await axios.post('http://localhost:5000/api/notifications', {
        title: props.title,
        message: `You showed interest on ${props.title}`,
        createdAt: new Date(props.start)
      });

      console.log('Notification sent:', response.data);
      // You can handle the response here as needed
    } catch (error) {
      console.error('Error sending notification:', error);
      // Handle errors appropriately
    }

};
  return (
    <>
      <section className="card-container"
        style={{width: '120vh'}}
      >
        <div className="card-details">
          <div className="event-image">
            <img
                  className="compbanner"
                  src={props.imgurl}
                  onError={(e) => { e.target.src = DemoImage; }}
                  alt="Competition Banner"
            />
          </div>

          <div className="event-info" style={{marginLeft: (props.title.length >= 27) ? '30vh' : '20vh'}}>
            <div className="event-title">
              <h1 style={{fontSize: '30px'}}>{props.title}</h1>
            </div>  

            <div className="event-date">
              <FontAwesomeIcon icon={faCalendarDays} size="lg" />
              <h4>Start Date : </h4>
              <h4>{props.start}</h4>
            </div>  

            <div className="event-price">
              <FontAwesomeIcon icon={faMoneyBill1Wave} size="lg" />
              <h4>Price : </h4>
              <h4>{props.fees}</h4>
            </div>

            <div className="buttons">

                <div className="interested-button">
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                  <button onClick={handleInterested}>
                    Interested
                  </button>
                </div>

                <div>
                  <button className="register-button">
                    <a href={`${props.url}`}>
                      Register
                    </a>
                  </button>
                </div>
            </div>
          </div>

        </div>
      </section>

      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title={props.title}
        size={props.size}
        fees={props.fees}
        url={props.url}
      />
    </>
  );
}

Card.propTypes = {
  imgurl: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  mode: PropTypes.string,
  fees: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
