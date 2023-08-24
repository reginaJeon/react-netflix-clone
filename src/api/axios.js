import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f424705cf1c17158bc8cef56fda30c85",
        language: "ko-KR"
    },
});