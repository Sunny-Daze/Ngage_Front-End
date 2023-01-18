import axios from "axios";
import { endPoints,domain } from "./endPoints";

export const createPost = async (body) => {
  console.log(
    domain + endPoints.createPost ==
      "http://localhost:6000/api/post/createPost"
  );

  axios
    .post("https://localhost:6000/api/post/createPost", body)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
