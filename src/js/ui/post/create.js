import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
    event.preventDefault(); 
    const title = event.target.title.value;
    const body = event.target.body.value; 
    const tags = event.target.tags.value.split(",").map(tag => tag.trim());
    const mediaUrl = event.target.mediaUrl.value;
    const mediaAlt = event.target.mediaAlt.value;
  
    const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;
  
    try {
      const newPost = await createPost({ title, body, tags, media });
      console.log("Post created successfully:", newPost);

      document.getElementById("message").textContent = "Post created successfully, going to index page...";

      event.target.reset(); 

      setTimeout(() => {
        window.location.href = '/';
    }, 2000);
    } catch (error) {
      console.error("Error while creating post:", error);
    }
  }