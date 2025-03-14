/*
* usdcny
*
* 6.75 CNY = 1 USD
* */

const usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

console.log(usdcny(465));
