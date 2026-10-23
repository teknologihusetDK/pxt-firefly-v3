/**
 * Blocks for controlling servos and DC motors on the Firefly v3 platform.
 */
//% color="#FF6600" weight=90 icon="" block="Firefly"
namespace Firefly {
    let i2cAddr = 8

    // Sender tre separate I²C-transaktioner (komponent → kommando → værdi).
    // TODO: Undersøg om firmwaren understøtter én 3-byte buffer; skift i så fald til i2cWriteBuffer.
    function write(component: number, command: number, value: number): void {
        pins.i2cWriteNumber(i2cAddr, component, NumberFormat.UInt8LE, false)
        basic.pause(10)
        pins.i2cWriteNumber(i2cAddr, command, NumberFormat.UInt8LE, false)
        basic.pause(10)
        pins.i2cWriteNumber(i2cAddr, value, NumberFormat.UInt8LE, false)
        basic.pause(10)
    }

    /**
     * Blink the onboard LED once.
     */
    //% block="blink LED"
    //% group="Utilities"
    //% weight=50
    export function blink() {
        pins.P0.digitalWrite(true)
        basic.pause(500)
        pins.P0.digitalWrite(false)
        basic.pause(500)
    }

    export enum ServoPinValues {
        //% block="servo 1"
        servo1 = 5,
        //% block="servo 2"
        servo2 = 6,
        //% block="servo 3"
        servo3 = 7,
        //% block="servo 4"
        servo4 = 8
    }

    //% blockId=set_servo
    //% block="Set %servoAtPin to position %angle"
    //% group="Servo Motor"
    //% weight=90
    //% angle.min=0 angle.max=180 angle.defl=0
    export function setServo(servoAtPin: ServoPinValues, angle: number): void {
        write(servoAtPin, 5, angle)
    }

    export enum DCPinValues {
        //% block="DC motor 1"
        dcmotor1 = 1,
        //% block="DC motor 2"
        dcmotor2 = 2,
        //% block="DC motor 3"
        dcmotor3 = 3,
        //% block="DC motor 4"
        dcmotor4 = 4
    }

    export enum DCDirectionValues {
        //% block="forwards"
        forwards = 1,
        //% block="backwards"
        backwards = 2
    }

    //% blockId=set_dc
    //% block="Run %dcAtPin %direction at speed %speed"
    //% group="DC Motor"
    //% weight=80
    //% speed.min=0 speed.max=100 speed.defl=0
    export function setDC(dcAtPin: DCPinValues, direction: DCDirectionValues, speed: number): void {
        write(dcAtPin, direction, speed)
    }
}
