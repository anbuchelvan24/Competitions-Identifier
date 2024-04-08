import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Header.css";
import logo from "./psg_tech_logo.png";
import { MdCircleNotifications } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai"; // Import close icon
import axios from "axios";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Events", href: "/dashboard" },
  { name: "Gallery", href: "/gallery" },
  { name: "Profile", href: "/profile" },
  { name: "Calendar", href: "/calendar" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
 
  useEffect(() => {
    fetchNotifications();
    fetchNotificationCount();
  }, [notifications, notificationCount]);
  
  const fetchNotifications = () => {
    fetch('http://localhost:5000/api/notifications')
      .then(response => response.json())
      .then(data => setNotifications(data))
      .catch(error => console.error('Error fetching notifications:', error));
  };

  const fetchNotificationCount = () => {
    fetch('http://localhost:5000/api/notificationCount')
      .then(response => response.json())
      .then(data => setNotificationCount(data))
      .catch(error => console.error('Error fetching notifications:', error));
  }

  const handleClick = () => {
    notifications.forEach(async notif => {
      try{
        await axios.post('http://localhost:5000/api/updateNotification', {...notif, read: true});
      } catch(err){
        console.log('Error Updating Notification Status!', err)
      }
    })
    
  }


  return (
    <>
      <div className="overall name-logo justify-start flex mt-4 ml-2">
        <a href="#">
          <img src={logo} alt="Logo" className="Logo"></img>
        </a>
        <h1 className="name text-3xl lg:text-xl">COMPETITIONS IDENTIFIER</h1>
      </div>
      <header className="absolute flex justify-end mr-6 inset-x-0 top-10 z-50">
        <nav
          className="flex items-center justify-end lg:justify-center p-6  lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <button
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                handleClick()
              }} // Toggle notifications panel
              className="text-xl font-bold leading-6 text-gray-900" // Style as needed
            >
              <MdCircleNotifications /> {`(${notificationCount})`}
            </button>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="hamburgermenu fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="name-logo flex justify-start">
                <a href="#">
                  <img src={logo} alt="Logo" className="Logo"></img>
                </a>
                <h1 className="name">COMPETITIONS IDENTIFIER</h1>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)} // Toggle notifications panel
                    className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Notifications
                  </button>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

        {/* Notifications tab */}
        <Dialog
          as="div"
          className="notificationtab"
          open={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Notifications</h2>
              <button
                onClick={() => setNotificationsOpen(false)}
                className="text-gray-700"
              >
                <AiOutlineCloseCircle className="h-6 w-6" />
              </button>
            </div>

            {notifications.map(notification => ( 
            <div key={notification._id} className="p-2 border-b">
              <p>{notification.message}</p>

              <p className="creationtime">{notification.createdAt}</p>
              <p>
                {Math.round((new Date(notification.createdAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 0 ? 'The event has concluded or is Live.' :
              `Event In : ${Math.round((new Date(notification.createdAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24))} Days,
              ${Math.round((new Date(notification.createdAt).getTime() - new Date().getTime()) / 36e5 )} Hours`}
              </p>

            </div>
          ))}
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default Header;
