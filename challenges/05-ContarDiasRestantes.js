function daysToXmas(date) {
    const xMasDay = new Date('Dec 25, 2021')
    var difference = xMasDay - date;
    let days = difference/(1000 * 3600 * 24)

    return Math.ceil(days)
}

const date1 = new Date('Dec 23, 2021 23:59:59')
const date2 = new Date('Dec 5, 2021')
    
console.log(daysToXmas(date1), daysToXmas(date2))