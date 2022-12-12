/**
 * Blocks for driving servo and DC motors, using the Firefly connection Board
 */

//% groups='["DC Motor","Servo Motor"]'
//% weight=111 color=#1565B2 icon="\uf085" block="Firefly"

namespace Firefly {
    let i2cAddr: 8 // 0x08
    
   

    function write(chipAddress: number, component: number, command: number, value: number): void {
        /*let buffer = pins.createBuffer(3)
        buffer.setNumber(NumberFormat.Int8LE, 0, component)
        buffer.setNumber(NumberFormat.Int8LE, 1, command)
        buffer.setNumber(NumberFormat.Int8LE, 2, value)
        pins.i2cWriteBuffer(chipAddress, buffer, false)*/
        /*pins.i2cWriteNumber(chipAddress, component, NumberFormat.Int8LE, false)
        pause(20)
        pins.i2cWriteNumber(chipAddress, command, NumberFormat.Int8LE, false)
        pause(20)
        pins.i2cWriteNumber(chipAddress, value, NumberFormat.Int8LE, false)
        pause(20)*/
        pins.i2c_write_number(chipAddress, component, NumberFormat.Int8LE, false)
        pause(20)
        pins.i2c_write_number(chipAddress, command, NumberFormat.Int8LE, false)
        pause(20)
        pins.i2c_write_number(chipAddress, value, NumberFormat.Int8LE, false)
        pause(20)
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
        //adjustMotorType("servo")
        write(i2cAddr, servoAtPin, 5, angle)
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
        //adjustMotorType("dc")
        write(i2cAddr, dcAtPin, direction, speed )
    }
}
