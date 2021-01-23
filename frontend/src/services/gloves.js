import axios from 'axios'

const url = "/api/gloves"

export const get = async () => {
    const res = await axios.get(url)
    console.log(res)
}

