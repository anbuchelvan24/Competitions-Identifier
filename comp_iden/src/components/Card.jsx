import { useState } from "react";
import PropTypes from "prop-types";
import DemoImage from "../assets/demo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faHeart,
  faPeopleGroup,
  faCalendarXmark,
  faIndianRupeeSign,
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./Details";

function Card(props) {
  const [showModel, setshowModal] = useState(false);

  function modalHandler() {
    setshowModal(true);
  }

  return (
    <>
      <section className=" mt-24 grid gap-8 rounded-xl border border-black m-2  hover:shadow-2xl md:m-5">
        <div>
          <div className="flex mt-1 space-around">
            <div className="w-[20%] h-[15%]">
              <img
                className="object-cover w-full"
                src={DemoImage}
                alt="competition ¸banner"
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
                      {props.name}
                    </h1>
                  </nav>
                </div>
                <div className="flex items-center space-x-1 md:mb-5">
                  <FontAwesomeIcon icon={faBuilding} size="lg" />
                  <h2 className="md:text-xl md:mr-2">{props.organisation}</h2>
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
                <button className="text-black bg-grey">Interested</button>
              </div>

              <div className="flex border border-2 rounded p-2 space-x-2 items-center hover:shadow-xl ml-4 md:mt-5">
                <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                <button className="text-black bg-grey"> Calender</button>
              </div>

              <div className="flex ml-auto hover:shadow-xl md:w-1/3">
                <button className="border border-2 rounded-lg p-1 w-full text-white bg-black bg-blue-500 ml-auto justify-end">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between border border-2 p-3 rounded-lg">
          <div className="flex justify-start items-center space-x-1">
            <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
            <h1 className="md:text-xl md:ml-1"> : {props.size}</h1>
          </div>

          <div className="flex justify-end items-center space-x-1">
            <FontAwesomeIcon icon={faCalendarXmark} size="xl" />
            <h1 className="md:text-xl md:ml-1"> : {props.deadline}</h1>
          </div>

          <div className="flex font-bold items-center space-x-1">
            <FontAwesomeIcon icon={faIndianRupeeSign} size="xl" />
            <h1 className="md:text-xl md:ml-1"> : {props.fees}</h1>
          </div>
        </div>
      </section>

      <Modal
        isVisible={showModel}
        onClose={() => setshowModal(false)}
        name={props.name}
        size={props.size}
        deadline={props.deadline}
        fees={props.fees}
        overview={props.overview}
        organiser={props.organiser}
        number={props.number}
        src={props.src}
      />
    </>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired, // Add this line for 'deadline'
  fees: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  organiser: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Card;
