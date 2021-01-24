import axios from 'axios'

const url = "/api/facemasks"

const get50 = async () => {
    const res = await axios.get(url)
    return res.data
}

const facemaskService = {
    get50,
}

export default facemaskService