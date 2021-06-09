import axiosClient from './axiousClient';

const token = localStorage['token'];
const adminApi = {
    accessCheck: () => {
        const url = '/admin';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },
}

export default adminApi;