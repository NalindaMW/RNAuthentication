import axios from "axios";

const API_KEY = "AIzaSyBwPSqr4QFbtp1vJM6cPdfi1Dncxmy2TzY";

async function authenticate(mode, email, password) {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_KEY;

  const reposnse = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(reposnse.data);
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
