const value1El = document.getElementById('value1')
const value2El = document.getElementById('value2')
const plusEl = document.getElementById('plus')
const minusEl = document.getElementById('minus')
const calcValueEl = document.getElementById('calc-value');
const resultValueEl = document.getElementById('result-value');

let action = '+'

plusEl.onclick = function () {
    action = '+'
}

minusEl.onclick = function () {
    action = '-'
}

function printResult(res) {
    resultValueEl.textContent = res < 0 ? (resultValueEl.style.color = "red", res) : (resultValueEl.style.color = "green", res)
}

function resultCalc(v1, v2) {
    return action == '+' ? Number(v1.value) + Number(v2.value) : Number(v1.value) - Number(v2.value)
}

calcValueEl.onclick = function () {
    printResult(resultCalc(value1El, value2El))
}