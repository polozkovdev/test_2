import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IUser } from "@/shared/types/user";
import { API_USERS } from "@/shared/api/api";

class UserStore {
  users: IUser[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await axios.get(API_USERS);
      this.users = response.data;
    } catch (error) {
      console.error("Failed to fetch users: ", error);
    } finally {
      this.isLoading = false;
    }
  }
}

export const userStore = new UserStore();
