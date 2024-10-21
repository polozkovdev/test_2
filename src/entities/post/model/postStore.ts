import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IPost } from "@/shared/types/post";
import { API_POSTS } from "@/shared/api/api";
import { userStore } from "@/entities/user";

class PostStore {
  posts: IPost[] = [];
  post: IPost | null = null;
  currentPage = 1;
  totalPosts = 0;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  async fetchPosts(page: number = 1) {
    this.isLoading = true;
    try {
      const postRes = await axios.get(`${API_POSTS}?_limit=10&_page=${page}`);
      this.posts = postRes.data;
      this.totalPosts = parseInt(postRes.headers["x-total-count"], 10);
      this.currentPage = page;
      await userStore.fetchUsers();
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      this.isLoading = false;
    }
  }

  async addPost(post: IPost) {
    try {
      const response = await axios.post(API_POSTS, post, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      console.log(
        `Post added successfully with payload: ${JSON.stringify(post)}`,
      );
      this.posts.push(response.data);
    } catch (error) {
      console.error("Failed to add post: ", error);
    }
  }

  async fetchPostById(id: number) {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await axios.get(`${API_POSTS}/${id}`);
      this.post = response.data;
      await userStore.fetchUsers();
    } catch (error) {
      this.error = `Failed to fetch post by id ${id}, ${error}`;
    } finally {
      this.isLoading = false;
    }
  }
}

export const postStore = new PostStore();
