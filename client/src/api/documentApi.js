import axiosClient from './axiousClient';




const DocumentApi = {

    getAll: (params) => {
        const url = '/document';
        return axiosClient.get(url, { params });
    },
    submitUpdateDocForm: (data, id) => {
        const url = `/document/${id}/update`;
        const token = localStorage['token'];
        return axiosClient.put(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    submitCreateDocForm: (data) => {

        const url = '/document/create';
        const token = localStorage['token'];
        return axiosClient.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    sortDelete: (id) => {
        const url = `/document/${id}/delete`;
        const token = localStorage['token'];
        return axiosClient.delete(url);
    }
}

export default DocumentApi;