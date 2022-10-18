import axios from 'axios';
const baseURL = 'http://wlod.rf.gd/api';

export async function signIn(email, password) {
  return await axios.post(`${baseURL}/signin`, {
    email,
    password,
  });
}
