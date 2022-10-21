import axios from 'axios';
const baseURL = 'http://alsyedmmtravel.com/api';

export async function signIn(email, password) {
  return await axios.post(`${baseURL}/signin`, {
    email,
    password,
  });
}

export async function signUp(
  first_name,
  middle_name,
  last_name,
  email,
  password,
  gender,
  prefix,
  suffix,
  phone,
  phone_type,
  dob,
  fingerprint,
) {
  return await axios.post(`${baseURL}/signup`, {
    first_name,
    middle_name,
    last_name,
    email,
    password,
    gender,
    prefix,
    suffix,
    phone,
    phone_type,
    dob,
    fingerprint,
  });
  // console.log(
  //     first_name,
  //   middle_name,
  //   last_name,
  //   email,
  //   password,
  //   gender,
  //   prefix,
  //   suffix,
  //   phone,
  //   phone_type,
  //   dob,
  //   fingerprint
  // );
}

export async function getUser(token) {
  return await axios.get(`${baseURL}/user_details`, {
    headers: {
      Authorization: token,
    },
  });
}
