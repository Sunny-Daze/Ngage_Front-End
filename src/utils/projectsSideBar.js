import { fetchData } from '../services/request'
import { domain, endPoints } from "../services/endPoints"
import { AiOutlineStar } from "react-icons/ai";

async function getProjectSubRoutes() {
    let arr = [];
    let response = await fetchData(domain + endPoints.fetchProjectNames);
    console.log(response);
    if (!response) return [];
    response.data.result.forEach((e) => {
        let obj = {
            path: "/project/" + e._id,
            name: e.title,
            icon: <AiOutlineStar />,
        };
        arr.push(obj);
    });


    return arr;
}


export { getProjectSubRoutes }