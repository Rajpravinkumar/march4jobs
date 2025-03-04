import instance from "./instance";


const authServices = {
    register: async (data) => {
        return await instance.post('/auth/register', data);
    },
    login: async (data) => {
        return await instance.post('/auth/login', data);
    },
    logout: async (data) => {
        return await instance.get('/auth/logout');
    },
    me : async (data) => {
        return await instance.get('/auth/me');
    }

}

export default authServices;