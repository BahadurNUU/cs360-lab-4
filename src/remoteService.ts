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

export async function remoteDelete<T>(path: string):Promise<T> {
    try {
        const res: AxiosResponse<T> = await api.delete<T>(path);
        return res.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}

export async function remotePost<T>(path: string, body: any):Promise<T> {
    try {
        const res: AxiosResponse<T> = await api.post<T>(path, body);
        return res.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

export async function remotePut<T>(path: string, body: any):Promise<T> {
    try {
        const res: AxiosResponse<T> = await api.put<T>(path, body);
        return res.data;
    } catch (error) {
        console.error('Error putting data:', error);
        throw error;
    }
}