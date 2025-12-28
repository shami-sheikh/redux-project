import axios from "axios"

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY
console.log("🔑 Loaded TENOR_KEY:", TENOR_KEY) 
export const fetchPhotos = async (query, page = 1, perPage = 20) => {
  const res = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    }
  );
 return res.data
 
};


 export const fetchvideos = async (query, page = 1, perPage = 20) => {
  const res = await axios.get(
    "https://api.pexels.com/videos/search",
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: PEXELS_KEY,
      },
    }
  );
 return res.data
 
};

export async function fetchGIFS(query, limit=20) {
  console.log("🔍 Fetching with key:", TENOR_KEY)
  
  const res = await axios.get('https://tenor.googleapis.com/v2/search',{
    params: {
      q: query, 
      key: TENOR_KEY, 
      limit,
      client_key: "my_app"  // Add this
    },
  })
  return res.data
}