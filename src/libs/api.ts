import axios from 'axios';

const baseURL =
  (import.meta.env.VITE_API_URL as string) ?? 'http://localhost:3000';

export const api = axios.create({
  baseURL,
});
