import axios from 'axios';

export default function() {
    const token = localStorage.getItem('userToken');
    console.log('axiosAuth token:', token);

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};