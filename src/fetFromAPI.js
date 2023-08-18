import axios from "axios";

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const fetchFromAPI = async (word) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${word}`);
        return data;
    } catch (err) {
        console.log(err);
    }
};
