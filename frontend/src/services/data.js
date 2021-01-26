import axios from 'axios'

const url = "/api/data"

const splitInChunks = (array) => {
    const n = 50
    return new Array(Math.ceil(array.length / n))
        .fill()
        .map(_ => array.splice(0, n))
}

const getAll = async () => {
    const res = await axios.get(url)
    return {
        ...res.data,
        data: {
            beanies: splitInChunks(res.data.data.beanies),
            gloves: splitInChunks(res.data.data.gloves),
            facemasks: splitInChunks(res.data.data.facemasks)
        }}
}

const dataService = {
    getAll
}

export default dataService