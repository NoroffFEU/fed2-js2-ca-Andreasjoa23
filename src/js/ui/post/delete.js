import { deletePost } from "../../api/post/delete";

/**
 * Handles the deletion of a post when a user confirms the action.
 * Retrieves the post ID from the dataset of the target element, 
 * prompts the user for confirmation, and calls the `deletePost` function 
 * to remove the post if confirmed.
 * 
 * @param {Event} event - The click event triggered when the delete button is clicked.
 * @returns {Promise<void>} - A promise that resolves when the deletion process is complete.
 */

export async function onDeletePost(event) {
    const postId = event.target.dataset.postId;
    const postElement = event.target.closest('.post');

    if (!postId) {
        console.error("Post ID not found.");
        return;
    }

    const confirmed = confirm("Are you sure you want to delete this awesome post?");
    if (confirmed) {
        const success = await deletePost(postId);
        if (success) {
            alert("Post is deleted.");
            localStorage.removeItem("postId")
            const currentPath = window.location.pathname;
            
            if (currentPath.includes('post')) {
                window.location.href = '/';
            } else {
                postElement.remove();
            }
        } else {
            alert("Failed to delete the post.");
        }
    }
}