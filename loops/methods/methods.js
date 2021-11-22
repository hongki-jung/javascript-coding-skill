const prices = ['1.0', '흥흥정정가가능능','2.15'];
const formattedPrices = prices.map(price => parseFloat(price)).filter(price=>price)

console.log('formattedPrices '  ,formattedPrices)