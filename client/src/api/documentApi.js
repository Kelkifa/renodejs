import axiosClient from './axiousClient';

const url = '/document';
const DocumentApi = {
    getAll: (params) => {
        return axiosClient.get(url, { params });
    }
}

export default DocumentApi;