import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IPost } from "@/shared/types/post";
import { API_POSTS, API_USERS } from "@/shared/api/api";
import { IUser } from "@/shared/types/user";

class PostStore {
  posts: IPost[] = [];
  post: IPost | null = null;
  users: IUser[] = [];
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
      const [postRes, userRes] = await Promise.all([
        axios.get(`${API_POSTS}?_limit=10&_page=${page}`),
        axios.get(API_USERS),
      ]);
      this.posts = postRes.data;
      this.users = userRes.data;
      this.totalPosts = parseInt(postRes.headers["x-total-count"], 10);
      this.currentPage = page;
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
    } catch (error) {
      this.error = `Failed to fetch post by id ${id}, ${error}`;
    } finally {
      this.isLoading = false;
    }
  }
}

export const postStore = new PostStore();
