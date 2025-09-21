const api = axios.create({
    baseURL: `http://localhost:4001`, // Replace with the actual port or URL
});
export async function remoteGet(path) {
    try {
        const res = await api.get(path);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function remoteDelete(path) {
    try {
        const res = await api.delete(path);
        return res.data;
    }
    catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}
export async function remotePost(path, body) {
    try {
        const res = await api.post(path, body);
        return res.data;
    }
    catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}
export async function remotePut(path, body) {
    try {
        const res = await api.put(path, body);
        return res.data;
    }
    catch (error) {
        console.error('Error putting data:', error);
        throw error;
    }
}
