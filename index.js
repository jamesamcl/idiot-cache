
var d = Object.create(null)

async function cache(k, ttl, getter) {

    let time = 'cache: get ' + k

    console.time(time)

    let v = d[k]

    if(v !== undefined) {
        console.timeEnd(time)
        return v
    }

    v = await getter()

    d[k] = v

    console.timeEnd(time)
    return v
}

module.exports = cache

