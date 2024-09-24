import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

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