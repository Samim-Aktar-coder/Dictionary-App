import axios from "axios";

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const fetchFromAPI = async (word) => {
    try {
        const response = await axios.get(`${BASE_URL}/${word}`);
        return response.data[0];
    } catch (err) {
        console.log(err);
    }
};
