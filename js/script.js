// generate random pin 
function generatePin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ""
    if (pinString.length == 4) {
        return pin
    } else {
        return generatePin()
    }
}
// generate pin button handler 
document.getElementById("pin-generate-btn").addEventListener("click", function () {
    const pin = generatePin()
    document.getElementById("pin-create-input").value = pin
})
// typing keypad
document.getElementById("key-pad").addEventListener("click", function (e) {
    const number = e.target.innerText
    const typedNumberInput = document.getElementById("type-pin")
    const prevNumber = typedNumberInput.value
    const newNumber = prevNumber + number
    if (isNaN(number)) {
        if (number == "C") {
            typedNumberInput.value = ""
        }
    }
    else {
        typedNumberInput.value = newNumber
    }
})
// verify pin 
function verifyPin() {
    const pin = document.getElementById("pin-create-input").value
    const typedNumberInput = document.getElementById("type-pin").value
    const matched = document.getElementById("match-yes")
    const notMatched = document.getElementById("match-no")
    if (pin == typedNumberInput) {
        matched.style.display = "block"
        notMatched.style.display = "none"
    }
    else {
        matched.style.display = "none"
        notMatched.style.display = "block"
    }
}
document.getElementById("pin-submit").addEventListener("click", verifyPin)