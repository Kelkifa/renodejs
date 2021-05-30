import axiousClient from './axiosClient';

const documentApi = {
    getAll: (params) => {
        const url = '/words';
        return axiousClient.get(url, { params });
    },
}

export default documentApi;