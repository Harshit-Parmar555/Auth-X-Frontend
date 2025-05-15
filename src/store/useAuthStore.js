import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const useAuthStore = create(() => ({
  user: null,
  isAuthenticated: false,
  checkingAuth: true,
  registering: false,
  verifing: false,
  logging: false,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/checkAuth");
      set({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      return error.response.data.message;
    } finally {
      set({ checkingAuth: false });
    }
  },

  register: async (userData) => {
    try {
      set({ registering: true });
      const response = await axiosInstance.post("/auth/register", { userData });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ registering: false });
    }
  },

  verify: async (data) => {
    try {
      set({ verifing: true });
      const response = await axiosInstance.post("/auth/verify-email", data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ verifing: false });
    }
  },

  login: async (userData) => {
    try {
      set({ logging: true });
      const response = await axiosInstance.post("/users/login", userData);
      toast.success("Login Successfull");
      set({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ logging: false });
    }
  },
}));
