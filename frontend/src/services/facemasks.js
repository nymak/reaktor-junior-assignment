import axios from 'axios'

const url = "/api/facemasks"

export const get = async () => {
    const res = await axios.get(url)
    console.log(res)
}

