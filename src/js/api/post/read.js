import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readPost(id) {
  try {
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, { 
          method: "GET",
          headers: headers(),
      });
      if (response.ok) {
          const data = await response.json();
          console.log("Post:", data);
          return data;
      } else {
          console.error("Failed to fetch post:", response.status);
      }
  } catch (error) {
      console.error("Error fetching post:", error);
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      ...(tag && { tag: tag }), 
      _author: true,
    });

    const response = await fetch(`${API_SOCIAL_POSTS}?${params}`, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const data = await response.json();
      const posts = data.data;
      return posts;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export async function readPostsByUser(name, limit = 12, page = 1, tag) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      ...(tag && { tag: tag }), 
    });

    const response = await fetch(`${API_SOCIAL_PROFILES}/${name}/posts?${params}`, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const data = await response.json();
      const posts = data.data;
      console.log(`Posts by user ${name}:`, posts);
      return posts;
    }
  } catch (error) {
    console.error(`Error fetching posts by user ${name}:`, error);
  }
}