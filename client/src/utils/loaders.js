import axios from "axios";
import { getToken } from "./helpers/common";


export async function getSessionTypes() {
  const sessionTypes = await axios.get('/api/session_types/')
  return sessionTypes
}

export async function getCoaches(){
  const allCoaches = await axios.get('/api/coaches')
  return allCoaches
}

export async function getSessions(){
  try {
    const [coaches, sessionTypes, sessions] = await Promise.all([
      getCoaches(),
      getSessionTypes(),
      axios.get('/api/coaching_sessions/', {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    ]);

    return {
      coaches,
      sessionTypes,
      sessions: sessions.data,
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Rethrow the error if needed
  }
}