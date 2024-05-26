import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3500d2db1b9c4148b92620f412b4d06e'
  }
});