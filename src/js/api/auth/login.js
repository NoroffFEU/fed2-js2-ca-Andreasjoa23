import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

/**
 * Logs in a user by sending their credentials to the authentication API.
 * If successful, the access token and user data are stored in localStorage, and the user is redirected to the homepage.
 * 
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The email of the user.
 * @param {string} credentials.password - The password of the user.
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 */

export async function login({ email, password }) {
    const body = JSON.stringify({
        email: email,
        password: password 
    });

    try {
        const response = await fetch(API_AUTH_LOGIN, {
        method: 'POST',
        headers: headers(),
        body,
        });

        const data = await response.json();
        const accessToken = data.data.accessToken;
        if (response.ok) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userData', JSON.stringify(data.data));
            window.location.href = '/';
        };

    } catch (error) {
        alert('Could not log in to user account')
        console.log(error);
    }    
}