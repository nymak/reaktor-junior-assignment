import axios from 'axios'

const url = "/api/data"

const getAll = async () => {
    const res = await axios.get(url)
    return res.data
}

const get50 = async () => {
    const res = await axios.get(`${url}/50`)
    return res.data
}

const dataService = {
    getAll,
    get50
}

export default dataService