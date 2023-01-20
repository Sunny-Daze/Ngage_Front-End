class HttpService {
  async post(url, body) {
    fetch(url, body)
    .then((response) => response.json())
    .then((json) => console.log(json));;
  }
}
