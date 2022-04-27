import axios from 'axios'

const USER_BASE_URL = 'http://localhost:3500/'

const headers={
    'Content-Type': 'application/json',
}

class Service{
    signin(credentials){
        return axios.post(USER_BASE_URL + "auth/signin", credentials, {headers: headers})
    }
    signup(data){
        return axios.post(USER_BASE_URL + 'auth/signup', data, {headers: headers})
    }
}

export default new Service()