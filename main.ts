/**
 * Blocks for driving servo and DC motors, using the Firefly connection Board
 */

//% groups='["DC Motor","Servo Motor"]'
//% weight=111 color=#1565B2 icon="\uf085" block="Firefly"

namespace Firefly {
    let i2cAddr: 0x08 // 0x08
    
   

    function write(chipAddress: number, component: number, command: number, value: number): void {
        const buffer = pins.createBuffer(3)
        buffer[0] = component
        buffer[1] = command
        buffer[2] = value
        pins.i2cWriteBuffer(chipAddress, buffer, false)
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
        servo1 = 1,
        servo2 = 2,
        servo3 = 3,
        servo4 = 4
    }

    //% blockId=set_servo
    /*//% block="Set %servoAtPin| to %angle"*/
    //% block="Sæt %servoAtPin| til position %angle"
    //% group="Servo Motor"
    //% angle.min=0 angle.max=180 angle.defl=0
    //max=150 - see servo spec doc
    export function setServo(servoAtPin: ServoPinValues, angle: number): void {
        //adjustMotorType("servo")
        write(i2cAddr, servoAtPin+4, 5, angle)
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
        forward = 0,
        backwards = 1
    }

    //% blockId=set_dc
    /*//% block="Set %dcAtPin| to %direction| at %speed"*/
    //% block="Kør %dcAtPin| %direction | med hastighed %speed"
    //% group="DC Motor"
    //% speed.min=0 speed.max=255 speed.defl=0
    export function setDC(dcAtPin: DCPinValues, direction: DCDirectionValues, speed: number): void {
        //adjustMotorType("dc")
        write(i2cAddr, dcAtPin, direction+1, speed )
    }
}
