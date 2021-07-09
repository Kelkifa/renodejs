import axiosClient from './axiousClient';

const keytrainApi = {
    getContent: (data) => {
        const url = '/keytrain';
        return axiosClient.get(url);
    }
}
export default keytrainApi;