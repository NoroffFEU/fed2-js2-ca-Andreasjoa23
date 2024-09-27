export function onLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("postId")
    alert("Logged out");
    window.location.href = "/auth/login/";
}