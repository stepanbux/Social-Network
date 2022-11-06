import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7151888d-35e1-44c4-b63e-8c036060459a"
    }
})

export const userAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser: (id) => {
        return (instance.post(`follow/${id}`))
            .then(response => response.data)
    },
    unfollowUser: (id) => {
        return (instance.delete(`follow/${id}`))
            .then(response => response.data)
    },
    authMyAcc: () => {
        return (instance.get(`auth/me`))
    },
    setUser: (id) => {
        return (instance.get(`profile/${id}`))
            .then(response => response.data)
    },
    getStatus: (id) => {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus: (status) => {
        return instance.put('profile/status', {
            status: status
        });
    },
    login: (email, password, rememberMe = false, captcha) => {
        return instance.post('auth/login', {
            email, password, rememberMe, captcha
        });
    },
    logout: () => {
        return instance.delete('auth/login');
    },
    captcha: () => {
        return instance.get('security/get-captcha-url');
    }
}