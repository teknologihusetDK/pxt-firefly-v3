// Compile-test: validerer at alle blokke kan kaldes korrekt.
// Denne fil kompileres ikke, når pakken bruges som extension.

Firefly.blink()

Firefly.setServo(Firefly.ServoPinValues.servo1, 0)
Firefly.setServo(Firefly.ServoPinValues.servo2, 90)
Firefly.setServo(Firefly.ServoPinValues.servo3, 45)
Firefly.setServo(Firefly.ServoPinValues.servo4, 180)

Firefly.setDC(Firefly.DCPinValues.dcmotor1, Firefly.DCDirectionValues.forwards, 50)
Firefly.setDC(Firefly.DCPinValues.dcmotor2, Firefly.DCDirectionValues.backwards, 100)
Firefly.setDC(Firefly.DCPinValues.dcmotor3, Firefly.DCDirectionValues.forwards, 0)
Firefly.setDC(Firefly.DCPinValues.dcmotor4, Firefly.DCDirectionValues.backwards, 75)

Firefly.rampDC(Firefly.DCPinValues.dcmotor1, Firefly.DCDirectionValues.forwards, 0, 100, 2000)
Firefly.rampDC(Firefly.DCPinValues.dcmotor1, Firefly.DCDirectionValues.forwards, 100, 0, 1000)
Firefly.stopDC(Firefly.DCPinValues.dcmotor1)
Firefly.stopDC(Firefly.DCPinValues.dcmotor4)
