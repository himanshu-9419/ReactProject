import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    

})
instance.defaults.headers.common['Authorization'] = "Auth Token will set"

//instance.interceptors.request...
 
export default instance;