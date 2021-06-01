import axiosClient from './axiousClient';

const DocumentApi = {
    getAll: (params) => {
        const url = '/document';
        return axiosClient.get(url, { params });
    }
}

export default DocumentApi;