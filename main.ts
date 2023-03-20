namespace Firefly {
    let i2cAddr = 8 
    
    function write(component: number, command: number, value: number): void {
        /*let buffer = pins.createBuffer(3)
        buffer.setNumber(NumberFormat.Int8LE, 0, component)
        buffer.setNumber(NumberFormat.Int8LE, 1, command)
        buffer.setNumber(NumberFormat.Int8LE, 2, value)
        pins.i2cWriteBuffer(chipAddress, buffer, false)*/
        pins.i2cWriteNumber(i2cAddr, component, NumberFormat.Int8LE, false)
        basic.pause(2)
        pins.i2cWriteNumber(i2cAddr, command, NumberFormat.Int8LE, false)
        basic.pause(2)
        pins.i2cWriteNumber(i2cAddr, value, NumberFormat.Int8LE, false)
        basic.pause(2)

    }

    /**
    * Blinks the LED once.
    */
    //% block
    export function blink() {
        pins.P0.digitalWrite(true)
        pause(500)
        pins.P0.digitalWrite(false)
        pause(500)
    }
    //% block
    //% blockHidden=true
    export enum ServoPinValues {
        servo1 = 5,
        servo2 = 6,
        servo3 = 7,
        servo4 = 8
    }

    //% blockId=set_servo
    /*//% block="Set %servoAtPin| to %angle"*/
    //% block="Sæt %servoAtPin| til position %angle"
    //% group="Servo Motor"
    //% angle.min=0 angle.max=180 angle.defl=0
    //max=150 - see servo spec doc
    export function setServo(servoAtPin: ServoPinValues, angle: number): void {
        //write(97, 98, 0) //Enable Servo
        write(servoAtPin, 5, angle)
    }

    //% block
    //% blockHidden=true
    export enum DCPinValues {
        dcmotor1 = 1,
        dcmotor2 = 2,
        dcmotor3 = 3,
        dcmotor4 = 4
    }

    //% block
    //% blockHidden=true
    export enum DCDirectionValues {
        forward = 1,
        backward = 2
    }

    //% blockId=set_dc
    /*//% block="Set %dcAtPin| to %direction| at %speed"*/
    //% block="Kør %dcAtPin| %direction | med hastighed %speed"
    //% group="DC Motor"
    //% speed.min=0 speed.max=100 speed.defl=0
    export function setDC(dcAtPin: DCPinValues, direction: DCDirectionValues, speed: number): void {
        //write(97, 97, 0) //Enable DC
        write(dcAtPin, direction, speed)

    }
}
