import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID jrPP_ZF1nVRkHs4IRE54ujj9Hyp-N4sZeiMff31OaX0"
    },
});