import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

export const getCandidates = async () => {
    const response = await axios.get(`${API_BASE_URL}/candidates`);
    return response.data;
};

export const uploadCandidate = async (id: string, name: string) => {
    const response = await axios.post(`${API_BASE_URL}/candidates/upload`, { id, name });
    return response.data;
};

export const voteForCandidate = async (candidateId: string) => {
    const response = await axios.post(`${API_BASE_URL}/candidates/vote`, { candidateId });
    return response.data;
};