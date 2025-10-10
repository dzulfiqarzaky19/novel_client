import axios from 'axios';

const baseURL = import.meta.env.VITE_API as string;

export const api = axios.create({
  baseURL,
});
