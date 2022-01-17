import axios from "axios";

export const getPost = async (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const getUsers = async (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};

// 데이터 형 확인해보기
