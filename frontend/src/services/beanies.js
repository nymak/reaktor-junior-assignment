import axios from 'axios'

const url = "/api/beanies"

const get50 = async () => {
    const res = await axios.get(url)
    return res.data
}

const beanieService = {
    get50
}

export default beanieService