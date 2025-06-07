import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://oh-sansi-back-production.up.railway.app/api', // ajustá si es necesario
});

export default instance;