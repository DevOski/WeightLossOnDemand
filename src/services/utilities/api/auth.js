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

export async function updateUserName(token, lname, fname) {
  return await axios.post(
    `${baseURL}/update_username`,
    {
      lname,
      fname,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserAddress(
  token,
  address,
  address2,
  city,
  state,
  zipCode,
) {
  return await axios.post(
    `${baseURL}/update_address`,
    {
      address,
      address2,
      city,
      state,
      zipCode,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserPhone(token, phone) {
  return await axios.post(
    `${baseURL}/update_phone`,
    {
      phone,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserEmail(token, email) {
  return await axios.post(
    `${baseURL}/update_email`,
    {
      email,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateFingerprint(token, fingerprint) {
  return await axios.post(
    `${baseURL}/update_fingrprnt`,
    {
      fingerprint,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserPassword(token, password) {
  return await axios.post(
    `${baseURL}/update_password`,
    {
      password,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}
