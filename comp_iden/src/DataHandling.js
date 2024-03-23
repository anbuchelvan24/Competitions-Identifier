const fetchEvents = async () => {
  
  try {
    const response = await fetch('http://localhost:8080/eventsData')

    if (response?.ok) return response.json()
    else throw new Error(`Err: ${response?.status}`)
    
  } catch (err){
    console.log(err);
  }

};

const fetchGalleryEvents = async () => {

  try {
    const response = await fetch('http://localhost:8080/galleryEventData');

    if (response?.ok) return response.json()
    else throw new Error(`Err: ${response?.status}`)
    
  } catch (err){
    console.log(err);
  }
}

export { fetchEvents, fetchGalleryEvents };