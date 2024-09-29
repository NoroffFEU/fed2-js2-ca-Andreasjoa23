/**
 * Logs the user out by removing authentication-related data from local storage.
 * After clearing the data, the user is alerted and redirected to the login page.
 */

export function onLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("postId")
    alert("Logged out");
    window.location.href = "/auth/login/";
}