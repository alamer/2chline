import axios from "axios/index"

export async function loadImagePortion() {
    console.log("get /portal/0/0");
    return  axios.get("/portal/0/0");  //{"image_url": "https://2ch.hk/b/src/179704288/15318807165760.png", "thread": "179704288", "md5": "30c0dcc6612b3cae35ec422076ac5307" };
}