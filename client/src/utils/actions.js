import axios from "axios";
import { formToObj } from "./helpers/common";

export async function sendSupportMessage(request){
  const data = await formToObj(request)
  return await axios.post('/api/contact/', data, {
    validateStatus: () => true
  })
}