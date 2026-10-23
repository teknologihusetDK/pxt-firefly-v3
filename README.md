# pxt-firefly-v3

> **English summary:** MakeCode extension for the Teknologihuset Firefly v3 board. Provides blocks for controlling up to 4 servos and 4 DC motors via I²C on a micro:bit.

MakeCode-extension til micro:bit til brug med Teknologishusets hjemmebyggede hardware-platform **Firefly v3**. Platformen har stik til op til 4 servoer og 4 DC-motorer, der styres via I²C.

[![MakeCode Build](https://github.com/teknologihusetdk/pxt-firefly-v3/actions/workflows/makecode.yml/badge.svg)](https://github.com/teknologihusetdk/pxt-firefly-v3/actions/workflows/makecode.yml)

---

## Tilføj extensionen i MakeCode

1. Åbn [makecode.microbit.org](https://makecode.microbit.org/) og opret et nyt projekt.
2. Klik på **tandhjulet** → **Extensions**.
3. Søg efter eller indsæt URL'en:
   ```
   https://github.com/teknologihusetdk/pxt-firefly-v3
   ```
4. Klik på extensionen for at tilføje den. Kategorien **Firefly** vises i bloklisten.

---

## Blokke

### Servo Motor

| Blok | Beskrivelse |
|------|-------------|
| `Sæt [servo] til position [vinkel]` | Sætter den valgte servo til en vinkel (0–180°). |

Tilgængelige porte: **servo 1 – servo 4**.

### DC Motor

| Blok | Beskrivelse |
|------|-------------|
| `Kør [motor] [retning] med hastighed [fart]` | Kører den valgte DC-motor fremad eller baglæns (fart 0–100). |

Tilgængelige porte: **DC motor 1 – DC motor 4**.

### Utilities

| Blok | Beskrivelse |
|------|-------------|
| `blink LED` | Blinker den indbyggede LED på P0 én gang. |

---

## Vigtigt: aktivér servo og motor på Firefly-printet

Firefly v3-printet har fysiske knapper til at slå strøm til servoer og DC-motorer. **Ingenting kører, før du trykker på den relevante knap på printet.** Sørg for at have aktiveret den ønskede gruppe (servo / motor), inden du sender kommandoer fra micro:bitten.

## Tilslutning

| Port på Firefly v3 | Blok-navn | I²C-komponentnummer |
|--------------------|-----------|---------------------|
| Servo 1            | servo 1   | 5                   |
| Servo 2            | servo 2   | 6                   |
| Servo 3            | servo 3   | 7                   |
| Servo 4            | servo 4   | 8                   |
| DC motor 1         | DC motor 1 | 1                  |
| DC motor 2         | DC motor 2 | 2                  |
| DC motor 3         | DC motor 3 | 3                  |
| DC motor 4         | DC motor 4 | 4                  |

---

## I²C-protokol

Micro:bitten kommunikerer med Firefly v3-printet på **I²C-adresse 8**. Hver kommando sendes som tre separate transaktioner med 10 ms pause imellem:

1. **Komponent** – hvilken servo eller motor (se tabellen ovenfor)
2. **Kommando** – handlingen (fx `5` for servovinkel, `1`/`2` for DC-retning)
3. **Værdi** – vinklen (0–180) eller hastigheden (0–100)

Protokollen er fastlåst til Firefly v3-firmwaren og må ikke ændres uden samtid firmware-opdatering.

---

## Licens

MIT © Teknologihuset – se [LICENSE](LICENSE).

Spørgsmål? Kontakt Teknologihuset eller åbn et issue på GitHub.

---

> Open this page at [https://teknologihusetdk.github.io/pxt-firefly-v3/](https://teknologihusetdk.github.io/pxt-firefly-v3/)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
