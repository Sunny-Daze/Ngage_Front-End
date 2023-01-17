
import axios from "axios";
import { endPoints } from "./endPoints";

export const createPost = async (body) => {

    console.log(endPoints.domain + endPoints.createPost)
  try {
    return await axios
      .post(endPoints.domain + endPoints.createPost, body)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    console.log("Error in logging in the user ", e);
  }
};
