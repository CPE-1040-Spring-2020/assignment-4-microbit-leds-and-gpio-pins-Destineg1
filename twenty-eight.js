led.enable(true)
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i < 5; i++) {
        led.plotBrightness(0, i, 64)
        led.plotBrightness(4, i, 128)
        led.plotBrightness(i, 0, 172)
        led.plotBrightness(i, 4, 255)
        basic.pause(10)

        for (let i = 1; i < 4; i++) {
            led.plotBrightness(1, i, 64)
            led.plotBrightness(3, i, 128)
            led.plotBrightness(i, 1, 172)
            led.plotBrightness(i, 3, 255)
            basic.pause(10)
            basic.clearScreen()
        }
    }
})
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P16, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        control.waitMicros(1000)
    }
})
