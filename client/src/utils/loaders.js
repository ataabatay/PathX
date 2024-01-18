import axios from "axios";


export async function getSessionTypes() {
  const sessionTypes = await axios.get('/api/session_types/')
  return sessionTypes
}

export async function getCoaches(){
  const allCoaches = await axios.get('/api/coaches')
  return allCoaches
}