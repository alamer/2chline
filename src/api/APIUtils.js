import axios from "axios/index"

export async function loadImagePortionAPI() {
    console.log("get /portal/0/0");
    return  axios.get("/portal/0/0");
}

export async function sendImageAPI(channel,image_url) {

    return axios.post('/portal/send/'+channel,'url='+image_url);
}