import axios from 'axios';

class AuthUtil {

    isAuthenticated(token) {

        let request = {
            jwt: token
        };

        return axios({
            method: 'post',
            url: '/api/validateToken',
            data: request
        })
    }

} export default new AuthUtil();
