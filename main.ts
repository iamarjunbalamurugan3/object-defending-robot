let sensor = 0
basic.forever(function () {
    sensor = Kitronik_Move_Motor.measure()
    if (sensor > 15) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 55)
    } else if (sensor < 15) {
        Kitronik_Move_Motor.stop()
        basic.pause(250)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 25)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 10)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
    }
})
