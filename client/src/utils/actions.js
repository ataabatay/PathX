import axios from "axios";
import { formToObj } from "./helpers/common";

export async function sendSupportMessage(request){
  const data = await formToObj(request)
  return await axios.post('/api/contact/', data, {
    validateStatus: () => true
  })
}

export async function createCoachingSession(request){
  const data = await formToObj(request)
  return await axios.post('/api/coaching_sessions/', data, {
    validateStatus: () => true
  })
}