import axios from 'axios'

const url = "/api/data/gloves"

const get50 = async () => {
    const res = await axios.get(url)
    return res.data
}

const gloveService = {
    get50
}

export default gloveService
