import axiosClient from './axiousClient';

const token = localStorage['token'];

const wordApi = {
    getAll: (params) => {
        const url = '/word';
        return axiosClient.get(url, { params });
    },
    store: (data) => {
        const url = '/word/store';
        return axiosClient.post(url, data, {
            headers: {
                'Authorization': 'Bearer ${token}',
            }
        })
    }
}

export default wordApi;