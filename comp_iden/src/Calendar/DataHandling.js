// NOTE : THIS IS A SEPERATE MODULE FOR HANDLING DATA REQUESTS, YOU CAN CHANGE IT OR PLACE THE LOGIC IN ANOHTER PLACE IF YOU LIKE
// imports
import events from "/src/sampleEvents.json";

// fetching data from a port in json format
// the fetched data must be an array of objects

const fetchEvents = async (callback) => {
  
  try {
    const response = await fetch('http://localhost:8080/eventsData')

    if (response?.ok) return response.json()
    else throw new Error(`Err: ${response?.status}`)
    
  } catch (err){
    console.log(err);
  }

};

export default fetchEvents;
