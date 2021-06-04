import axiosClient from './axiousClient';

const wordApi = {
    getAll: (params) => {
        const url = '/word';
        return axiosClient.get(url, { params });
    },
}

export default wordApi;