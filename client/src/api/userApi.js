import axiosClient from './axiousClient';


const userApi = {
    login: (data) => {
        const url = '/user/login';
        return axiosClient.post(url, data);
    }
}

export default userApi;