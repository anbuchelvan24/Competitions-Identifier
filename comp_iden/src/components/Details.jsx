import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPeopleGroup,
  faCalendarXmark,
  faIndianRupeeSign,
  faCircleInfo,
  faPhone,
  faLocationDot,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Modal({
  isVisible,
  onClose,
  title,
  fees,
  url,
  imgurl,
}) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!isVisible) return null;

  function handleClose(e) {
    if (e.target.id == "wrapper") {
      onClose();
    }
  }

  function tabHandler(tab) {
    setActiveTab(tab);
  }

  function getContent(activeTab) {
    switch (activeTab) {
      case "overview":
        return <p>{overview}</p>;

      case "prize":
        return <p>image or paragraph</p>;

      case "location":
        return (
          <iframe
            className="w-[100%] h-[300px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        );

      case "contacts":
        return (
          <div className="p-2">
            <h1 className="font-semibold mb-3 md:text-xl">
              Contact the organisers
            </h1>
            <div className="flex space-between">
              <div className="mt-1">
                <FontAwesomeIcon icon={faPeopleGroup} size="3x" />
              </div>

              <div className="ml-5">
                <h4 className="md:text-lg">{organiser}</h4>
                <p className="md:text-lg">{number}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center border rounded-md"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[400px] flex flex-col md:w-[80%] h-[50%]">
        <button
          className="text-white text-xl place-self-end md:text-2xl"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded flex flex-col ">
          <div className="mx-2 mb-5">
            <h1 className="font-semibold md:text-xl mt-3">{title}</h1>
          </div>

          <div>
            <div className="flex font-bold items-center space-x-1">
              <FontAwesomeIcon icon={faIndianRupeeSign} size="lg" />
              <h1 className="md:text-xl"> : {fees}</h1>
            </div>
          </div>

          <div className="flex justify-between border border-2 p-3 rounded-lg mt-2">
            <div className="flex justify-start items-center space-x-1">
              <FontAwesomeIcon
                icon={faCircleInfo}
                size={activeTab === "overview" ? "xl" : "lg"}
                onClick={() => tabHandler("overview")}
              />
            </div>

            <div className="flex justify-end items-center space-x-1">
              <FontAwesomeIcon
                icon={faTrophy}
                size={activeTab === "prize" ? "xl" : "lg"}
                onClick={() => tabHandler("prize")}
              />
            </div>

            <div className="flex font-bold items-center space-x-1">
              <FontAwesomeIcon
                icon={faLocationDot}
                size={activeTab === "location" ? "xl" : "lg"}
                onClick={() => tabHandler("location")}
              />
            </div>

            <div className="flex font-bold items-center space-x-1">
              <FontAwesomeIcon
                icon={faPhone}
                size={activeTab === "contacts" ? "xl" : "lg"}
                onClick={() => tabHandler("contacts")}
              />
            </div>
          </div>

          <div className="border border-2 p-3 rounded-lg mt-2 h-[300px] overflow-auto">
            <div className="mb-[10px]">{getContent(activeTab)}</div>
          </div>
        </div>
      </div>
    </div>

  
  );
}

export default Modal;
