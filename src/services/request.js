import axios from "axios";
export async function fetchData(url,body) {
    let token = localStorage.getItem("token");
    let response = await axios.post(
        url,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
        return response;
    } else {
      return false;
    }
}