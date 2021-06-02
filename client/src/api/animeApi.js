import axiosClient from './axiousClient';


const animeApi = {
    getAll: (params) => {
        const token = localStorage['token'];
        const url = '/anime';
        return axiosClient.get(url, {
            params,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

export default animeApi;