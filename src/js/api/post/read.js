import { API_SOCIAL_POSTS, API_KEY } from "../constants";
import { headers } from "../headers";

export async function readPost() {}

export async function readPosts(limit = 12, page = 1, tag) {
    const queryParameters = `?limit=${limit}&page=${page}&_author=true&_reactions=true&_comments=true`;
    try {
      const response = await fetch(API_SOCIAL_POSTS + queryParameters, {
        method: "GET",
        headers: headers(),
      });

      if (response.ok) {
        const data = await response.json();
  
        const userPosts = data.data;
  
        return userPosts;
      }
    } catch (error) {
      console.log(error);
      alert("There was ann error trying to fetch the user posts");
    }
  }

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}