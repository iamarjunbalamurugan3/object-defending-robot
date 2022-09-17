sensor = 0

def on_forever():
    global sensor
    sensor = Kitronik_Move_Motor.measure()
    if sensor > 10:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 50)
    elif sensor < 10:
        Kitronik_Move_Motor.stop()
        basic.pause (500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 50)
        basic.pause(1000)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT,50)

basic.forever(on_forever)
