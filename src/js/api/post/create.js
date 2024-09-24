import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";

export async function createPost({ title, body, image, alt }) {
    const postContent = {
      title: title,
      body: body,
      media: {
        url: image,
        alt: alt,
      },
    };
  
    console.log("request body", postContent);
    try {
      const response = await fetch(API_SOCIAL_POSTS, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(postContent),
      });
  
      console.log("Request Payload", JSON.stringify(postContent, null, 2));
      console.log("Response", response);
  
      if (response.ok) {
        const data = await response.json();
        console.log("Post created", data);
        return data;
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  }