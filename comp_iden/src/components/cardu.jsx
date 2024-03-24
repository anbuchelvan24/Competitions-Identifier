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
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Details";
import moment from "moment";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

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
      <section className=" mt-24 grid gap-8 rounded-xl border border-black m-2  hover:shadow-2xl md:m-5">
        <div>
          <div className="flex mt-1 space-around">
            <div className="w-[20%] h-[15%]">
              <img
                className="compbanner"
                src={props.imgurl}
                onError={(e) => { e.target.src = DemoImage; }}
                alt="Competition Banner"
              />
            </div>

            <div className="flex flex-col ">
              <div className="p-5">
                <div>
                  <nav>
                    <h1
                      className="font-bold text-md md:text-3xl md:mb-5"
                      onClick={modalHandler}
                    >
                      {props.title}
                    </h1>
                  </nav>
                </div>
                <div className="flex items-center space-x-1 md:mb-5">
                  <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                  <h2 className="md:text-xl md:mr-2">{props.start}</h2>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                  <h3 className="md:text-xl ">{props.mode}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3 ">
            <div className="flex flex-grow">
              <div className="flex border border-2 rounded p-2 space-x-2 items-center hover:shadow-xl md:mt-5">
                <FontAwesomeIcon icon={faHeart} size="lg" />
                <button className="text-black bg-grey" onClick={handleInterested}>
                  Interested
                </button>
              </div>

              <div className="flex ml-auto hover:shadow-xl md:w-1/3">
                <button className="regbox p-1 w-full text-white bg-black bg-blue-500 ml-auto justify-end">
                  <a href={`${props.url}`} className="register-button">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="fee-text flex font-bold items-center space-x-1">
            <FontAwesomeIcon icon={faIndianRupeeSign} size="xl" />
            <h1 className="md:text-xl md:ml-1"> : {props.fees}</h1>
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
