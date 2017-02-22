import axios from 'axios';
let base = 'http://localhost:5000/api/';
let url = base + 'account';
export const ValidateLogin = paras => {
    axios.post(url, paras).then(res => {
        console.log(res);
        return res.data;
    }).catch(err => {
        return { msg: err, code: 500 };
    })
}