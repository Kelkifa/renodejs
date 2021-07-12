import axiosClient from './axiousClient';


const adminApi = {
    accessCheck: () => {
        const token = localStorage['token'];
        const url = '/admin';
        console.log(token);
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },
}

export default adminApi;