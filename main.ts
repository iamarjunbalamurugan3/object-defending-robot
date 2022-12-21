let sensor = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
let rear = moveMotorZIP.range(0, 2)
let head = moveMotorZIP.range(0, 2)
basic.forever(function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    head.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    rear.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
})
basic.forever(function () {
    sensor = Kitronik_Move_Motor.measure()
    if (sensor > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    } else if (sensor < 10) {
        Kitronik_Move_Motor.stop()
        basic.pause(250)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 25)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 25)
        basic.pause(250)
        Kitronik_Move_Motor.stop()
    }
})
