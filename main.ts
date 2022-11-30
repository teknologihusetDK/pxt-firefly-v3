namespace Firefly {

    export function blink() {
        pins.P0.digitalWrite(true)
        pause(500)
        pins.P0.digitalWrite(false)
        pause(500)
    }

}
