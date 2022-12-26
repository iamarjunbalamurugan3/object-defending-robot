let sensor = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
let head = moveMotorZIP.range(0, 1)
let rear = moveMotorZIP.range(1, 2)
let _1 = moveMotorZIP.range(2, 3)
let _2 = moveMotorZIP.range(3, 4)
basic.forever(function () {
    sensor = Kitronik_Move_Motor.measure()
    if (sensor > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 25)
    } else if (sensor < 10) {
        Kitronik_Move_Motor.stop()
        basic.pause(250)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 25)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 10)
        basic.pause(250)
        Kitronik_Move_Motor.stop()
    }
})
basic.forever(function () {
    head.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    rear.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
    _1.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    _2.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
})
basic.forever(function () {
    music.setVolume(255)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("A F E F D G E F ", 120)
})
