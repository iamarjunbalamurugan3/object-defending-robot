sensor = 0

def on_forever():
    global sensor
    sensor = Kitronik_Move_Motor.measure()
    if sensor > 10:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 50)
    elif sensor < 10:
        Kitronik_Move_Motor.stop()
        basic.pause (250)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 25)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT,10)
        basic.pause(250)
        Kitronik_Move_Motor.stop()


basic.forever(on_forever)
