import axios, { AxiosResponse, AxiosInstance } from 'axios';
import 'dotenv/config';

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.PORT}`,
});

export async function remoteGet<T>(path: string):Promise<T> {
    try {
        const res: AxiosResponse<T> = await api.get<T>(path);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}