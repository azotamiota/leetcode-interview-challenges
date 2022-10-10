const maxProfit = function(prices) {
    prices = prices.filter((price, idx) => {
        return price !== prices[idx + 1]
    })
    let haveStock = false
    let currMoney = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1] && (prices[i] <= prices[i - 1] || i === 0)) {
            currMoney -= prices[i];
            haveStock = true
        } else
        if ((prices[i] > prices[i + 1] && haveStock) || (i === prices.length - 1 && prices[i] > prices[i - 1])) {
            currMoney += prices[i];
            haveStock = false
        }
    }
    return currMoney < 0 ? 0 : currMoney
};
