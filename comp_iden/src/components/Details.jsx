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
  name,
  size,
  deadline,
  fees,
  overview,
  organiser,
  number,
  src,
}) {
  const [activeTab, setActiveTab] = useState("overview");

  // const contentMap = {
  //     Overview: 'Overvi\tew cont\nent goes here ds ds d dsd dsdddsdsdsd sssdds dsdsds ds sd dsddsdsdsdsd sd sd sd sd sd sd sd sd sd sd sd sdsdsds dsd sd sd dfsd fwhufjdf uf uwfyw dsuhasdshaas dasdas hdhdasi dhau djadjsadjaasjajdasjdajabdab hey guys this is sanjith and im trying to write as fast as i can',
  //     TechStack: 'Web or App',
  //     Directions: 'Directions content goes here.',
  //     Contacts: 'Phone no: +91 1234567890',
  // };

  // function tabHandler(tab){
  //     setActiveTab(tab);
  // };

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
            src={src}
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
            <h1 className="font-semibold md:text-xl mt-3">{name}</h1>
          </div>

          <div className="flex justify-between border border-2 p-3 rounded-lg">
            <div className="flex justify-start items-center space-x-1">
              <FontAwesomeIcon icon={faPeopleGroup} size="lg" />
              <h1 className="md:text-xl"> : {size}</h1>
            </div>

            <div className="flex justify-end items-center space-x-1">
              <FontAwesomeIcon icon={faCalendarXmark} size="lg" />
              <h1 className="md:text-xl"> :{deadline}</h1>
            </div>

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

    // <>
    // <section className='flex m-1 p-2 border border-4 border-black rounded md:w-1/2  md:mx-auto md:h-3/4'>
    //     <div className='md:w-1/2 md:h-1/2'>
    //     <div>
    //         <Link to="/"><FontAwesomeIcon icon={faCircleXmark} size="lg" /></Link>
    //     </div>

    //     <div className='p-4 flex'>

    //         <div className=' border border-1 border-black mr-2 h-[80%] rounded rounded-md md:w-1/4' >
    //                 <h3 onClick={() => tabHandler('Overview')} className='m-1 hover:text-lg hover:font-bold'>Overview</h3>
    //                 <h3 onClick={() => tabHandler('TechStack')} className='m-1 hover:text-lg hover:font-bold'>TechStack</h3>
    //                 <h3 onClick={() => tabHandler('Directions')} className='m-1 hover:text-lg hover:font-bold'>Directions</h3>
    //                 <h3 onClick={() => tabHandler('Contacts')} className='m-1 hover:text-lg hover:font-bold'>Contacts</h3>
    //         </div>

    //         <div className=' p-2  border border-1 border-black rounded rounded-md md:w-3/4 overflow-hidden whitespace-normal break-words'>
    //             <p>{contentMap[activeTab]}</p>

    //         </div>
    //     </div>
    //     </div>

    // </section>

    // <section>

    // <div className="absolute bottom-0 bg-primary w-full">
    //     <h1 className='text-white'>PSG Institute of Technology and Applied Research</h1>
    //     <br />
    //     <h6 className='text-white'>Salem, Highway, Avinashi Rd, Coimbatore, Neelambur, Tamil Nadu 641062</h6>
    // </div>
    // </section>
    // </>
  );
}

export default Modal;
