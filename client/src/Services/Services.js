import axios from 'axios'

const USER_BASE_URL = 'http://localhost:3500/'

const headers = {
    'Content-Type': 'application/json',
}

class Service {
    signin(credentials) {
        return axios.post(USER_BASE_URL + "auth/signin", credentials, { headers: headers })
    }
    signup(data) {
        return axios.post(USER_BASE_URL + 'auth/signup', data, { headers: headers })
    }
    sociallogin(credentials) {
        return axios.post(USER_BASE_URL + 'auth/social-login', credentials, { headers: headers })
    }
    signout() {
        return axios.get(USER_BASE_URL + "auth/signout")
    }
    forgotpassword(email) {
        return axios.post(USER_BASE_URL + "auth/forgot-password", email, { headers: headers })
    }
    allusers(id){
        return axios.get(USER_BASE_URL + "auth/alluser/" + id)
    }
    sendMessage(data){
        return axios.post(USER_BASE_URL + "message/addmsg", data, {headers:headers})
    }
    async getMessage(data){
        return await axios.post(USER_BASE_URL + "message/getmsg", data, {headers:headers})

    }
}

export default new Service()