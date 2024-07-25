import axios from "axios";
export const callApi = async (searchParams ) => {
    const params = Object.fromEntries(searchParams.entries())
    const response = await axios.get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats", 
        {
            params : {page:1, limit:3, ...params}
        }
    );
    return response.data;
}