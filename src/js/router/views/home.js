import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read"; 
import { renderPosts } from "../../ui/post/producePost"; 

const seePosts = async () => {
  try {
    const posts = await readPosts(); 

    const latestPosts = posts.length > 12 ? posts.slice(-12) : posts;

    renderPosts(latestPosts, "posts");
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

seePosts();
authGuard();
setLogoutListener();