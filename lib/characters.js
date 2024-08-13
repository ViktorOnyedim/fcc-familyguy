import axios from "axios";
import { endpoint } from "@/utils/endpoint";

export async function getAllCharacters() {
    try {
      const response = await axios.get(`${endpoint}/characters`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }
  
      console.log(response.data, typeof response.data);
      return response.data;
    } catch (error) {
      throw error; // Re-throw the error after logging it
    }
  };

  