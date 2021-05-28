import axios from "axios";

export const makeRequest = async (id: any) => {
    const request = await axios.get(
        `https://counts.live/api/youtube-subscriber-count/${id}/live`
    );
    if (request.status === 200) {
        if (request.data.data.subscribers) {
            return await request.data.data;
        } else {
            return `fail: ${request.data}`;
        }
    } else {
        return `fail: ${request.data}`;
    }
};
