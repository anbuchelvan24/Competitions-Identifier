import Card from "./components/Card";
import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", type: "spring", delay: 0.5 },
  },
};
export default function Render() {
  const Records = [
    {
      id: 1,
      name: "Code to Care Challenge 2021",
      organisation: "Philips",
      mode: "Online",
      deadLine: "12/21/21",
      fees: 200,
      size: "2-4",
      organiser: "Sanjith.K",
      number: "1234567890",
      overview:
        "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doled quia consequuntur magni dolores eos qui ratione voluptatem bore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasu",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.707879526451!2d77.6000707816855!3d12.967551671304989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680b68d65fb%3A0x2f03f7526c070b5!2sNagarjuna%20Restaurant%20-%20Residency%20Road!5e0!3m2!1sen!2sin!4v1705491436718!5m2!1sen!2sin",
    },
    {
      id: 2,
      name: "Central India's Largest Hackathon '24",
      organisation: "NIT, Bhopal",
      mode: "Offline",
      deadLine: "12/21/21",
      fees: "FREE",
      size: "1-2",
      organiser: "Metro Boomin",
      number: "0987654321",
      overview:
        "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doled quia consequuntur magni dolores eos qui ratione voluptatem bore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasu",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.707879526451!2d77.6000707816855!3d12.967551671304989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680b68d65fb%3A0x2f03f7526c070b5!2sNagarjuna%20Restaurant%20-%20Residency%20Road!5e0!3m2!1sen!2sin!4v1705491436718!5m2!1sen!2sin",
    },
    {
      id: 3,
      name: "AI BioInnovate Challenges",
      organisation: "IIT Jodhpur",
      mode: "Offline",
      deadLine: "12/21/21",
      fees: 400,
      size: "4-5",
      organiser: "J Cole",
      number: "1122334455",
      overview:
        "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doled quia consequuntur magni dolores eos qui ratione voluptatem bore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasu",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.707879526451!2d77.6000707816855!3d12.967551671304989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680b68d65fb%3A0x2f03f7526c070b5!2sNagarjuna%20Restaurant%20-%20Residency%20Road!5e0!3m2!1sen!2sin!4v1705491436718!5m2!1sen!2sin",
    },
  ];

  return (
    <>
      <div>
        <h1 className="mt-24 ml-6 mb-2 font-bold text-4xl">Technical events</h1>
      </div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-20 flex flex-col md:flex-col lg:flex-row"
      >
        {Records &&
          Records.map((record) => {
            return (
              <Card
                key={record.id}
                name={record.name}
                organisation={record.organisation}
                mode={record.mode}
                deadline={record.deadLine}
                fees={record.fees}
                size={record.size}
                overview={record.overview}
                organiser={record.organiser}
                number={record.number}
                src={record.src}
              />
            );
          })}
      </motion.div>
      <div
        className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f45799] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </>
  );
}
