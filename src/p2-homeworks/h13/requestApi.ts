import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test"
})

export const reqApi = {
    async send(value: boolean) {
        const res = await instance.post("", {success: value})
        return res
    }
}