import { onLogin } from "../../ui/auth/login";

/**
 * Binds the `onLogin` event handler to the login form.
 * This allows the form to trigger the login process upon submission.
 */

const form = document.forms.login;

form.addEventListener("submit", onLogin);