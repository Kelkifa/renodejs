import axiosClient from './axiousClient';


const authApi = {
    get: (params) => {
        const token = localStorage['token'];
        const url = '/user/auth';
        return axiosClient.get(url, {
            params,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

export default authApi;