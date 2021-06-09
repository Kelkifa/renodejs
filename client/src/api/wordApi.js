import axiosClient from './axiousClient';



const wordApi = {
    getAll: (params) => {
        const token = localStorage['token'];
        const url = '/word';
        return axiosClient.get(url, {
            params,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },
    store: (data) => {
        const url = '/word/store';
        const token = localStorage['token'];
        return axiosClient.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
    },
    findWord: (data) => {
        const url = '/word/find';
        const token = localStorage['token'];
        return axiosClient.post(url, data, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
    },
    updateWord: (data, id) => {
        const url = `/word/${id}/update`;
        const token = localStorage['token'];
        return axiosClient.put(url, data, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
    },
    deleteWord: (id) => {
        const url = `/word/${id}/delete`;
        const token = localStorage['token'];
        return axiosClient.delete(url, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
    }
}

export default wordApi;