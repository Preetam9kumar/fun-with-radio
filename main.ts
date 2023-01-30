input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showString("Hello!")
basic.forever(function () {
    radio.setGroup(1)
})
