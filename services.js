import axios from "axios";

export async function fetchApi(url) {
  try {
    const data = await axios.get(url);
    return data?.data;
  } catch (error) {
    console.log("err in catch", error);
  }
}
