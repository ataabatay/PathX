import axios from "axios";


export async function getSessionTypes() {
  const sessionTypes = await axios.get('/api/session_types/')
  return sessionTypes
}