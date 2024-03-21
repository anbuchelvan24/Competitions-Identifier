// NOTE : THIS IS A SEPERATE MODULE FOR HANDLING DB REQUESTS, YOU CAN CHANGE IT OR PLACE THE LOGIC IN ANOHTER PLACE IF YOU LIKE
// importS
import events from "/src/sampleEvents.json";

// fetching data from database in json format
// the fetched data must be an array of objects

const fetchEvents = async (callback) => {
  // await and fetching data code goes here, along with error handling (to check if response is 'ok')
  const data = events;
  callback(data);
};

export default fetchEvents;
