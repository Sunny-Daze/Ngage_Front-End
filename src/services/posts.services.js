import { endPoints, domain } from "./endPoints";

export const createPost = async (body) => {
  console.log(
    domain + endPoints.createPost == "http://localhost:6000/api/post/createPost"
  );

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
