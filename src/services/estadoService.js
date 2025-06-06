import axios from 'axios';

const API_BASE_URL = 'https://oh-sansi-back-production.up.railway.app'; // Ajusta si es necesario

export const getEstadosConvocatoria = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/convocatoria-estados`);
    return response.data;
};