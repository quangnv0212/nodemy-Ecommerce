import axiosClient from "./axios-client";

export const albumApi = {
  getAll() {
    return axiosClient.get("/albums?populate=*");
  },
};
