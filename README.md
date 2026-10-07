# أمي وأبي — KG1 Arabic slideshow (2026_ara_1k_1a_02_03_01)

Open `index.html` in Chrome or Edge (double-click works offline), then tap the big play button.

## Controls (icons only, RTL flow)
- Left button (arrow pointing left) = Next
- Centre button = Play / Pause → turns into Replay when the screen finishes
- Right button (arrow pointing right) = Previous
- Keyboard: ← next · → previous · Space play/pause

## Folder structure (reusable template)
| Path | What it is | Change per lesson? |
|---|---|---|
| `assets/js/player.js` | Engine: stage scaling, controls, audio, character sprite + lip-sync, cue API | No |
| `assets/js/svg-shim.js` + `selahkg-ds.js` | Renders the «Selah KG Arabic Motion» design-system components as live SVG | No |
| `assets/css/player.css` | Stage, buttons, start screen | No |
| `assets/audio/sfx/` | Fixed SFX kit: click, pop, sparkle, whoosh | No |
| `assets/js/lesson.js` | The 10 scenes: layout + cues tied to spoken words, e.g. `c.fill(frame, c.w('أتناول'))` | Yes |
| `assets/js/lesson-data.js` | Word timings for each VO file, speech segments for lip-sync, image sizes | Yes (generated) |
| `assets/audio/vo/` | Voice-over per scene (ElevenLabs v4, voice "Cody" = Zizi, Egyptian accent, MSA text) | Yes |
| `assets/img/` | Lesson pictures (Magnific GPT 2, flat 2D style) | Yes |
| `assets/char/` | Character sprite sheets: idle / talk / think (8 columns, 320×530 frames, 25 fps) | Per character |

## Start and end screens
- Start screen = the title scene, with the play button on the bottom edge of the title card.
- End screen (generic, every element): 2 s after the last voice line, a dark overlay and a popup with the end message and a Replay button centred on the popup's bottom edge. Change the message in `assets/js/lesson.js` → `ELEMENT.endMessage` (use \n for a new line).

## Layout
- Header: logo (top-left) + fixed lesson chip (top-right).
- Content safe area: y 150 → 850 (stage px). Nothing is placed below it, so the control bar never covers content.
- Control bar: rounded container at the bottom centre.
- Character stands on the left; content sits to its right.

## Notes
- Cues are attached to words, not to fixed seconds: if a VO take is replaced, regenerate the timings in `lesson-data.js` and every animation follows automatically.
- Character expressions used: Idle, LipSync (automatic while the voice is speaking) and Thinking (available, not needed in this storyboard).
- Alternative VO takes (4 per scene) are in `_raw/vo_eg/` (Egyptian accent, used) and `_raw/vo/` (first recording); original PNGs in `_raw/images/`.
- Libraries: GSAP 3.15 (animation), Howler 2.2.4 (audio). Both are bundled locally, so the package needs no internet.
