import axios from 'axios'

const url = "/api/data"

// Split array into equal chunks
// Needed for pagination
const splitInChunks = (array) => {
    const n = 50
    return new Array(Math.ceil(array.length / n))
        .fill()
        .map(_ => array.splice(0, n))
}

// Calls backends /api/data to get all data
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