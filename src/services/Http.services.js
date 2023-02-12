async function postMethod(url, body) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization:':'Bearer '
      
    },
    body: JSON.stringify(body),
  }).then((value) => console.log(value));
}

module.exports = {
  postMethod,
};
