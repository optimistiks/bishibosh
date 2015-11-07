import axios from 'axios';

export default async function (parseFile) {
    const response = await axios.get(parseFile._url);
    return response.data;
};
