import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
    console.log("createdPost")
    event.preventDefault();

    const formData = new formData(event.target);

    const createPostContent = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags"),
        media: formData.get("media"),
    };

    createPost(createPostContent)
}