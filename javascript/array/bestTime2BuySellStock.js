// best time to buy & sell stocks.
// given an array of prices where prices[i] is the price of a given stock on the ith day.
// maximize profit by choosing a single day to buy 1 stock & choosing a different day to sell that stock.
// return max profit, if cannot achieve profit, return 0.
// prices = [7,1,5,3,6,4] = output = 5 (buy-1, sell-6)
// prices = [7,6,4,3,1] = output = 0 (no profit)
// prices = [2,4,1] = output = 2 (buy-2, sell-4)

function maximizeProfit_brute(prices) {
    // TC: O(n^2)
    // SC: O(1)
    let profit = 0
    for (let i=0; i<prices.length-1; i++) {
        let bought_at = prices[i];
        for (let j=i+1; j<prices.length; j++) {
            let sold_at = prices[j];
            let current_pnl = sold_at - bought_at;
            if (current_pnl > profit) {
                profit = current_pnl
            }
        }
    }
    return profit
}

console.log(maximizeProfit_brute([7,1,5,3,6,4])) // 5
console.log(maximizeProfit_brute([7,6,4,3,1])) // 0
console.log(maximizeProfit_brute([2,4,1])) // 2

function maximizeProfit_greedy(prices) {
    // greedy algorithm: calculate solution with whatever we have right now (current index)
    // hence, calc. profit at every index
    // TC: O(n)
    // SC: O(1)
    let profit = 0
    let min_price_to_buy = Number.MAX_VALUE;
    for (let i=0; i<prices.length-1; i++) {
        // compute min price to buy stock
        if (prices[i] < min_price_to_buy) {
            min_price_to_buy = prices[i]
        }
        // compute profit
        current_profit = prices[i+1] - min_price_to_buy
        if (current_profit > profit) {
            profit = current_profit
        }
    }
    return profit
}

console.log(maximizeProfit_greedy([7,1,5,3,6,4])) // 5
console.log(maximizeProfit_greedy([7,6,4,3,1])) // 0
console.log(maximizeProfit_greedy([2,4,1])) // 2