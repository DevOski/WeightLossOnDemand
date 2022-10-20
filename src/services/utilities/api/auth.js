import axios from 'axios';
const baseURL = 'http://wlod.rf.gd/api';

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
    first_name: 'test',
    middle_name: 'as',
    last_name: 'do',
    email: 'tes@gmail.com',
    password: '123456789',
    gender: 'Male',
    prefix: 'ds',
    suffix: 'as',
    phone: '03101030000',
    phone_type: 'Mobile',
    dob: '22/02/2022',
    fingerprint: 0,
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

