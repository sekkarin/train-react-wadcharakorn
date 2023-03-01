export function pagination(pagisize, currentpage, data) {
    let value = data.slice(pagisize*(currentpage-1), pagisize*currentpage+pagisize)
    .slice(0, pagisize)

    return {
        statusCode: 200,
        taskStatus: true,
        message: 'Success',
        pagin: {
            totalrow: data.length,
            pagisize: pagisize,
            currentpage: currentpage,
            totalpage: Math.ceil(data.length / pagisize)
        },
        data:value
    }
}