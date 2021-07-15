function sendRequest(fromTokenAddress, toTokenAddress, amount){
    let xmlHttp = new XMLHttpRequest;
    let data
    xmlHttp.onload = function () {
        data = JSON.parse(xmlHttp.responseText)
    }
    xmlHttp.open("GET", `https://api.1inch.exchange/v3.0/1/quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`, false)
    xmlHttp.send()    
    return data
}

document.querySelector('.button').addEventListener('click', () => {
    let data = sendRequest(document.getElementById('iA1').value, document.getElementById('iA2').value, document.querySelector(".inputAmount").value)
    document.getElementById('tokenName1').textContent = data.fromToken.name
    document.getElementById('amount1').textContent = data.fromTokenAmount + ' ' + data.fromToken.symbol
    document.getElementById('tokenName2').textContent = data.toToken.name
    document.getElementById('amount2').textContent = Number(data.toTokenAmount)/10**(data.toToken.decimals - data.fromToken.decimals) + ' ' + data.toToken.symbol

})