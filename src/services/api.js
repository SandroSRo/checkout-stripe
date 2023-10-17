import axios from "axios";
export const api = axios.create({
headers: {
    Authorization: `Bearer sk_test_51NwukdHINe39QevZCK6ibj8EtA2f0OZLl2JLiUfJsbhJqbSCUJs2dk9lvGYRBT2iiegv2zfhEzDJq9XZrqhbpwAo002PLVH8A7`
},
    baseURL: "https://api.stripe.com/v1/"
});
